import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  MdInputModule,
  MdSelectModule,
  MdOptionModule,
  MdNativeDateModule,
  MdDatepickerModule,
} from "@angular/material";

// Self
import { UserProfileStatisticComponent } from './user-profile-statistic.component';

@NgModule({
  declarations: [
    UserProfileStatisticComponent,
  ],

  imports: [
    // ====== Angular modules =======
    FormsModule,
    CommonModule,
    MdInputModule,
    
    // ====== Material modules ======
    // Datepicker modules
    MdDatepickerModule,
    MdNativeDateModule,
    // Select modules
    MdSelectModule,
    MdOptionModule,
  ],

  exports: [],
  providers: [],
})
export class UserProfileStatisticModule {}