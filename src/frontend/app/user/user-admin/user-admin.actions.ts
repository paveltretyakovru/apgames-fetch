import { Injectable } from '@angular/core';

import { StoreActionModel as Action } from 'app/shared/models/store-action.model';

@Injectable()
export class UserAdminActions {

  static ADD_USER = 'ADD_USER';
  addUser(value: boolean): Action{
    return {
      type: UserAdminActions.ADD_USER,
      payload: value,
    }
  }

}