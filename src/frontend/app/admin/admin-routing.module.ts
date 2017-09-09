import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminDashBoardComponent } from './shared/admin-dashboard/admin-dashboard.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminDashBoardComponent,
      },
      {
        path: 'users/:id',
        component: AdminUsersComponent,
      }
    ],
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ],
})
export class AdminRoutingModule {};