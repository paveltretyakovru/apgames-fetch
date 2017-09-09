import { StoreActionModel } from './shared/models/store-action.model';
import { AppActions } from './app.actions';

export interface App {
  progress: Boolean;
}

export type AppState = App;

export const initState: AppState = {
  progress: false,
}

export const appReducer = (
  state = initState,
  action: { type: string, payload: any }
): AppState => {

  switch (action.type) {
    case AppActions.SET_APP_PROGRESS: {
      return { ...state, progress: action.payload }
    }

    default: {
      return { ...state };
    }
  }
}