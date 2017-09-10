import { AdminUser } from './admin-users/admin-user.model';
import { AdminState } from './admin-state.model';
import { AdminActions } from './admin.actions';


export const initState: AdminState = {
  users: [({id: 1, login: 'test'})],
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

    default: {
      return { ...state };
    }
  }
}