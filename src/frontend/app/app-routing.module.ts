import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksRouting } from './tasks/tasks.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';

const serverHost = 'http://localhost:3002';

export const apiRoutes: any = {

  // Users
  login: `${serverHost}/api/user/login`,
  addUser: `${serverHost}/api/user/add`,
  loadUsers: `${serverHost}/api/user/list`,

  // Sources
  loadSources: `${serverHost}/api/sources`,
};

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user',
    canLoad: [ AuthGuardService ],
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // 404
  { path: '**', component: NotFoundComponent }
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