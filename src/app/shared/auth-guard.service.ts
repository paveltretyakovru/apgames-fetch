import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivateChild {
  constructor(private router: Router, authService: AuthService) {}

  canActivateChild() {
    this.router.navigate(['/login']);
    return false;
  }
}