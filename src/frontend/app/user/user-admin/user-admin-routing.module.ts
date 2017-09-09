import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserAdminComponent } from './user-admin.component';

const userAdminRoutes: Routes = [
  {
    path: 'admin',
    component: UserAdminComponent,
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(userAdminRoutes) ],
  exports: [ RouterModule ],
})
export class UserAdminRoutingModule {};