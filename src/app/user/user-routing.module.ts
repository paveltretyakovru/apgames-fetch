import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from 'app/tasks//tasks.component';
import { AuthGuardService } from 'app/shared/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileIndexComponent } from './user-profile/user-profile-index/user-profile-index.component';
import { UserProfileStatisticComponent } from './user-profile/user-profile-statistic/user-profile-statistic.component';

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
            path: '',
            component: UserProfileIndexComponent,
          },
          {
            path: 'tasks',
            component: TasksComponent,
          },
          {
            path: 'statistic',
            component: UserProfileStatisticComponent,
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