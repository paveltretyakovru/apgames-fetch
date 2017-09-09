import { Injectable } from '@angular/core';

import { StoreActionModel as Action } from 'app/shared/models/store-action.model';

@Injectable()
export class AdminActions {

  static ADD_USER = 'ADD_USER';
  addUser(value: boolean): Action {
    return {
      type: AdminActions.ADD_USER,
      payload: value,
    }
  }

  static SET_USERS = 'SET_USERS';
  setUsers(value: any[]): Action {
    return {
      type: AdminActions.SET_USERS,
      payload: value,
    }
  }

}