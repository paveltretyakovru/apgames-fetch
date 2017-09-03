import { Store } from '@ngrx/store'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router, CanActivateChild, ActivatedRouteSnapshot } from '@angular/router';

import { User } from 'app/user//user.model';
import { AppState } from 'app/app-state.model';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivateChild {
  user: User;
  userState$: Observable<User>;
  private userStateSubscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
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
        if(!this.user.auth) this.authService.setUserAuth(true);
        return true;
      } else {

        // If user are not signed, then move him to the login page
        if(this.user.auth) this.authService.setUserAuth(false);
        this.router.navigate(['/login']);
        return false;
      }
    });
  }

  checkLogin(callback: any = (result:boolean) => result): Observable<boolean> {
    return Observable.of(true).delay(300).do((val) => {
      callback([true, false][Math.floor(Math.random()*2)]);
    });
  }
}