import { Store } from '@ngrx/store'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router, CanActivateChild } from '@angular/router';

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
    this.store.select('user').subscribe((user: User) => {
      this.user = user;
    });
  }

  canActivateChild(): boolean {
    this.router.navigate(['/login']);
    return false;
  }

  checkLogin(): boolean {
    return true;
  }
}