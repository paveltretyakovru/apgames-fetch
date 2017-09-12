import { AdminUser } from './admin-users/admin-user.model';
import { AdminState } from './admin-state.model';
import { AdminActions } from './admin.actions';

import { Source } from './shared/filters/sources/source.model';

export const initState: AdminState = {
  users: [],
  sources: [],
}

export const adminReducer = (
  state = initState,
  action: { type: string, payload: any }
): AdminState => {

  switch(action.type) {
    case AdminActions.ADD_USER: {
      let users = [...state.users];
      users.push(action.payload);

      return { ...state, users: users };
    }

    case AdminActions.SET_USERS: {
      return { ...state, users: action.payload } 
    }

    case AdminActions.FETCH_STATE: {
      return { ...action.payload };
    }

    case AdminActions.UPDATE_USER_SOURCES: {
      let response = action.payload;
      let users = [...state.users].map(el => el.id === response.id ? response : el);

      return { ...state, users: users };
    }

    default: {
      return { ...state };
    }
  }
}