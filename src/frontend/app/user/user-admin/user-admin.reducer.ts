import { UserAdminState } from './user-admin-state.model';
import { UserAdminActions } from './user-admin.actions';

export const initState: UserAdminState = {
  users: ['Some User'],
}

export const userAdminReducer = (
  state = initState,
  action: { type: string, payload: any }
): UserAdminState => {

  switch(action.type) {
    case UserAdminActions.ADD_USER: {
      let users = [...state.users];
      users.push(action.payload);

      return { ...state, users: users };
    }

    case UserAdminActions.SET_USERS: {
      return { ...state, users: action.payload } 
    }

    default: {
      return { ...state };
    }
  }
}