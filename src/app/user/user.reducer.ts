import { User } from './user.model';

export type UserState = User;

export const initState: UserState = {
  auth: false,
  name: 'Aloha',
}

export const userReducer = (
  state = initState,
  action: { type: string, payload: any }
): UserState => {

  switch(action.type) {
    default: {
      return { ...state };
    }
  }
}