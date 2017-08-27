import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksRouting } from './tasks/tasks.routing';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tasks',
    children: TasksRouting,
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  }
];

export const navRoutes: any[] = [
  { path: '', label: 'Home', isActive: true },
  { path: 'tasks', label: 'Tasks Manager', isActive: false },
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);