import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Task } from './task/task.model';
import { AppState } from '../app-state.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
})
export class TasksComponent {
  tasks: Observable<Task[]>;
  newTask: Task = {id: 0, title: ''};

  constructor(
    private store: Store<AppState>,
    private tasksServive: TasksService
  ) {
    this.tasks = store.select('tasks');
  }

  addTask() {
    this.tasksServive.addTask(this.newTask);
  }
}