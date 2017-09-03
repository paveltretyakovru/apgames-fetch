import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';

import { userReducer } from './user/user.reducer';
import { tasksReducer } from './tasks/tasks.reducer';

export default compose(storeLogger(), combineReducers)({
  user: userReducer,
  tasks: tasksReducer,
});