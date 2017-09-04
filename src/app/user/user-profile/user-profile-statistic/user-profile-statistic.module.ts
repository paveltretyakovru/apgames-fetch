import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MdInputModule,
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
    MdInputModule,
    
    // ====== Material modules ======
    // Datepicker modules
    MdDatepickerModule,
    MdNativeDateModule,
  ],

  exports: [],
  providers: [],
})
export class UserProfileStatisticModule {}