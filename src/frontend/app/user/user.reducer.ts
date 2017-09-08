import { User } from './user.model';
import { UserActions } from './user.actions';

export type UserState = User;

export const initState: UserState = {
  auth: true,
}

export const userReducer = (
  state = initState,
  action: { type: string, payload: any }
): UserState => {

  switch(action.type) {
    case UserActions.SET_USER_AUTH: {
      return { ...state, auth: action.payload };
    }

    default: {
      return { ...state };
    }
  }
}