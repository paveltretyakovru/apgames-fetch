import { Injectable } from '@angular/core';

import { AdminState } from './admin-state.model';
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

  static SET_SOURCES = 'SET_SOURCES';
  setSources(value: any[]): Action {
    return {
      type: AdminActions.SET_SOURCES,
      payload: value,
    }
  }

  static FETCH_STATE = 'FETCH_STATE';
  fetchState(data: AdminState): Action {
    return {
      type: AdminActions.FETCH_STATE,
      payload: data,
    }
  }

  static UPDATE_USER_SOURCES = 'UPDATE_USER_SOURCES';
  updateUserSources(sources: Number[]): Action {
    return {
      type: AdminActions.UPDATE_USER_SOURCES,
      payload: sources,
    }
  }
}