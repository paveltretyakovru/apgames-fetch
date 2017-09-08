import { Component, Input } from '@angular/core';

import { Task } from '../task/task.model';

@Component({
  selector: 'tasks-list',
  styleUrls: ['tasks-list.component.css'],
  templateUrl: 'tasks-list.component.html',
})
export class TasksListComponent {
  @Input() tasks: Task[];
};