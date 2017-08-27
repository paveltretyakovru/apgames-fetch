import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AppStore } from '../app-store.model';

@Injectable()
export class UserService {
  constructor(
    private store: Store<AppStore>,
    private router: Router
  ) {}

  routeToLogin() {
    this.router.navigate(['/user/login']);
  }
}