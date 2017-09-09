import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ],
})
export class AdminRoutingModule {};