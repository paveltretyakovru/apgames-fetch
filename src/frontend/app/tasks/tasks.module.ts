import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksService } from './tasks.service';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [ TasksComponent ],
  providers: [ TasksService ],
  declarations: [ TasksComponent, TasksListComponent ],
})
export class TasksModule {}