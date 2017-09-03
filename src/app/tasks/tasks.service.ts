import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Task } from './task/task.model';
import { AppState } from '../app-state.model'; 
import { ADD_TASK } from './tasks.constants';

@Injectable()
export class TasksService {
  constructor(private store: Store<AppState>) {}

  addTask(task: Task) {
    this.store.dispatch({type: ADD_TASK, payload: task});
  }
}