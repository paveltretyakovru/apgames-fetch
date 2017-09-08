import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AppState } from '../app-state.model';

@Injectable()
export class UserService {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  routeToProfile() {
    this.router.navigate(['/user/statistic']);
  }

  routeToHome() {
    this.router.navigate(['/']);
  }
}