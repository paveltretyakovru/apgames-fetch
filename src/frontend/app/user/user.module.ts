import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material modules
import { MdTabsModule, MdCardModule } from '@angular/material';

import { UserService } from './user.service';
import { TasksModule } from 'app/tasks/tasks.module';
import { UserComponent } from './user.component';
import { MdButtonModule } from "@angular/material";
import { UserRoutingModule } from './user-routing.module';
import { UserStatisticModule } from './user-statistic/user-statistic.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    UserComponent,
    UserProfileComponent,
  ],
  
  imports: [
    // Angular modules
    CommonModule,

    // Self modules
    TasksModule,
    UserStatisticModule,
    UserRoutingModule,
    
    // Material modules
    MdTabsModule,
    MdCardModule,
    MdButtonModule,
  ],
  
  providers: [ UserService ],
})
export class UserModule {};