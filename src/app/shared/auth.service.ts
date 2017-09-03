import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { AppState } from 'app/app-state.model';
import { UserActions } from 'app/user/user.actions';

@Injectable()
export class AuthService {
  constructor(private store: Store<AppState>) {}

  setUserAuth(value: boolean) {
    this.store.dispatch({ type: UserActions.SET_USER_AUTH, payload: value });
  }
}