import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [ UserProfileComponent ],
  imports: [ CommonModule, UserRoutingModule ],
  providers: [ UserService ],
})
export class UserModule {};