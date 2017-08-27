import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from "./user-login/user-login.component";

export const userRouting: Routes = [  
  { path: 'user', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(userRouting)
  ],
  exports: [
    RouterModule,
  ],
})
export class UserRoutingModule {};