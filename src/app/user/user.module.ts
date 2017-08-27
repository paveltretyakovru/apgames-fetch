import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [ UserLoginComponent ],
  imports: [ CommonModule, UserRoutingModule ],
  exports: [ UserLoginComponent ],
  providers: [ UserService ],
})
export class UserModule {};