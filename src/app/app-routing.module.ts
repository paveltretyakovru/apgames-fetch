import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksRouting } from './tasks/tasks.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

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
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

export const navRoutes: any[] = [
  { path: './', label: 'Home', isActive: false },
  { path: 'statistic', label: 'Statistic', isActive: true },
  { path: 'tasks', label: 'Tasks', isActive: false },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {};