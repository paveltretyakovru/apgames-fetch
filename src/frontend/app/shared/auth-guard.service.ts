import { Store } from '@ngrx/store'; 
import { Route } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router, CanActivateChild, ActivatedRouteSnapshot, CanLoad } from '@angular/router';

import { User } from 'app/user/user.model';
import { AppState } from 'app/app-state.model';

@Injectable()
export class AuthGuardService implements CanActivateChild, CanLoad {
  user: User;
  userState$: Observable<User>;
  private userStateSubscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {

    // Fetching user state from store
    this.store.select('user').subscribe((user: User) => { this.user = user });
  }

  canActivateChild(): Observable<boolean> {

    // Check user auth state
    if(this.user.auth) return Observable.of(true);

    // Check login from server
    return this.checkLogin((result: boolean) => {
      if(result) {
        return true;
      } else {

        // If user are not signed, then move him to the login page
        this.router.navigate(['/login']);
        return false;
      }
    });
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.checkLogin((result: boolean) => {
      if(result) {
        return true;
      } else {

        // If user are not signed, then move him to the login page
        this.router.navigate(['/login']);
        return false;
      }
    });
  }

  checkLogin(callback: any = (result:boolean) => result): Observable<boolean> {
    return Observable.of(true).delay(300).do((val) => {
      callback(this.user.auth);
      // callback([true, false][Math.floor(Math.random()*2)]);
    });
  }
}