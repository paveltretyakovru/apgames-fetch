import { Injectable } from '@angular/core';

import { StoreActionModel as Action } from 'app/shared/models/store-action.model';

@Injectable()
export class AppActions {

  static SET_APP_PROGRESS = 'SET_APP_PROGRESS';
  setAppProgress(value: boolean): Action {
    return {
      type: AppActions.SET_APP_PROGRESS,
      payload: value,
    }
  }
}