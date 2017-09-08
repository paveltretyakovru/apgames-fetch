import { Injectable } from '@angular/core';

import { StoreActionModel as Action } from 'app/shared/models/store-action.model';

@Injectable()
export class UserActions {

  static SET_USER_AUTH = 'SET_USER_AUTH';
  setUserAuth(value: boolean): Action{
    return {
      type: UserActions.SET_USER_AUTH,
      payload: value,
    }
  }

}