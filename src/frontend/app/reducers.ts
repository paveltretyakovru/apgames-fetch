import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers, ActionReducerMap, ActionReducer } from '@ngrx/store';

import { AppState } from './app-state.model';
import { appReducer, initState as appInitState } from './app.reducer';
import { userReducer, initState as userInitState } from './user/user.reducer';
import { tasksReducer, initState as tasksInitState } from './tasks/tasks.reducer';
import { adminReducer, initState as adminInitState } from './admin/admin.reducer';

// Full initial state
export const storeInitState: AppState = {
  app: appInitState,
  user: userInitState,
  tasks: tasksInitState,
  admin: adminInitState,
};

// Meta reducers
export const metaReducers:Array<any> = [
  (reducer: ActionReducer<AppState>): any => storeLogger()(reducer),
];

// Reducers Map
export const reducers: ActionReducerMap<AppState> = {
  app: appReducer,
  user: userReducer,
  tasks: tasksReducer,
  admin: adminReducer,
}