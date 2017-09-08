import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { TasksComponent } from 'app/tasks//tasks.component';
import { AuthGuardService } from 'app/shared/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserStatisticComponent } from './user-statistic/user-statistic.component';

export const userRouting: Routes = [  
  {
    path: 'user',
    canLoad: [ AuthGuardService ],
    component: UserComponent,
    canActivateChild: [ AuthGuardService ],
    
    children: [
      {
        path: 'tasks',
        component: TasksComponent,
      },
      {
        path: 'statistic',
        component: UserStatisticComponent,
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'admin',
        canLoad: [ AuthGuardService ],
        loadChildren: './user-admin/user-admin.module#UserAdminModule',
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(userRouting) ],
  exports: [ RouterModule ],
})
export class UserRoutingModule {};