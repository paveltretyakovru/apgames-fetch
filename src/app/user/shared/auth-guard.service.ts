import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras,
  CanActivate,
  Router,
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    let url: string = state.url;
    
    console.log('Trying access to -->', url);

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if(this.authService.isLoggedIn) { return true; }

    let sessionId = 123456789;
    this.authService.redirectUrl = url;

    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
    }

    this.router.navigate(['/user/login'], navigationExtras);
    return false;
  }
}