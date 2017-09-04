import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material modules
import { MdTabsModule } from '@angular/material';

import { UserService } from './user.service';
import { TasksModule } from 'app/tasks//tasks.module';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileIndexComponent } from './user-profile/user-profile-index/user-profile-index.component';
import { UserProfileStatisticComponent } from './user-profile/user-profile-statistic/user-profile-statistic.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileIndexComponent,
    UserProfileStatisticComponent,
  ],
  
  imports: [
    TasksModule,
    UserRoutingModule,
    
    CommonModule,
    
    MdTabsModule,
  ],
  
  providers: [ UserService ],
})
export class UserModule {};