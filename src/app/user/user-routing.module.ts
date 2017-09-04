import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from 'app/tasks//tasks.component';
import { AuthGuardService } from 'app/shared/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const userRouting: Routes = [  
  {
    path: 'user',
    canActivateChild: [AuthGuardService],
    children: [
      // USER/PROFILE ROUTE
      {
        path: 'profile',
        component: UserProfileComponent,
        children: [
          {
            path: 'tasks',
            component: TasksComponent,
          }
        ],
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(userRouting) ],
  exports: [ RouterModule ],
})
export class UserRoutingModule {};