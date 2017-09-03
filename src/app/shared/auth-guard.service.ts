import { Store } from '@ngrx/store'; 
import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';

import { AppState } from 'app//app-state.model';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivateChild {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
  ) {}

  canActivateChild(): boolean {
    this.router.navigate(['/login']);
    return false;
  }

  checkLogin(): boolean {
    return true;
  }
}