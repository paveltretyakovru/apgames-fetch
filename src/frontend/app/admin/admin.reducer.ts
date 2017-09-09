import { AdminState } from './admin-state.model';
import { AdminActions } from './admin.actions';

export const initState: AdminState = {
  users: ['Some User'],
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

    default: {
      return { ...state };
    }
  }
}