import { Action } from '@ngrx/store';

import { ADD_TASK } from './tasks.constants';
import { Task } from './task/task.model';

export const initState: Task[] = [
  {id: 1, title: 'First task'},
  {id: 2, title: 'Second task'},
];

export const tasksReducer = (
  state: Task[] = initState,
  action: { type: string, payload: any }
) => {
  switch(action.type) {
    case ADD_TASK: {
      let newTask: Task = {
        id: +state[state.length - 1].id + 1,
        title: action.payload.title,
      };
      return [...state, newTask];
    }

    default: {
      return state;
    }
  }
};