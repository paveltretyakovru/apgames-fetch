import { User } from './user.model';

export type UserState = User;

const initState: UserState = {
  auth: false,
}

export const userReducer = (
  state = initState,
  action: { type: string, payload: any }
): UserState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}