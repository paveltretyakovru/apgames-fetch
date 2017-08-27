import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const userRouting: Routes = [  
  {
    path: 'user',
    children: [
      // USER/LOGIN ROUTE
      { path: 'login', component: UserLoginComponent },
      
      // USER/PROFILE ROUTE
      {
        path: 'profile',
        canActivate: [AuthGuardService],
        component: UserProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(userRouting) ],
  exports: [ RouterModule ],
  providers: [ AuthGuardService, AuthService ],
})
export class UserRoutingModule {};