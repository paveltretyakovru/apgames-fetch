import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers, ActionReducerMap, ActionReducer } from '@ngrx/store';

import { AppState } from './app-state.model';
import { userReducer, initState as userInitState } from './user/user.reducer';
import { tasksReducer, initState as tasksInitState } from './tasks/tasks.reducer';

// Full initial state
export const storeInitState: AppState = {
  user: userInitState,
  tasks: tasksInitState,
};

// Meta reducers
export const metaReducers:Array<any> = [
  (reducer: ActionReducer<AppState>): any => storeLogger()(reducer),
];

// Reducers Map
export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  tasks: tasksReducer,  
};