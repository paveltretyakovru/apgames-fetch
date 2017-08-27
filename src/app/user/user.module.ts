import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [ UserLoginComponent, UserProfileComponent ],
  imports: [ CommonModule, UserRoutingModule ],
  exports: [ UserLoginComponent ],
  providers: [ UserService ],
})
export class UserModule {};