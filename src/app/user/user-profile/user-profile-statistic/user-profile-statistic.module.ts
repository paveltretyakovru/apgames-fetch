import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import {
  MdCardModule,
  MdTableModule,
  MdInputModule,
  MaterialModule,
  MdSelectModule,
  MdOptionModule,
  MdNativeDateModule,
  MdDatepickerModule,
} from "@angular/material";

// Self
import { StatisticTableComponent } from './shared/statistic-table/statistic-table.component';
import { UserProfileStatisticComponent } from './user-profile-statistic.component';

@NgModule({
  declarations: [
    StatisticTableComponent,
    UserProfileStatisticComponent,
  ],

  imports: [
    // ====== Angular modules =======
    FormsModule,
    CommonModule,
    
    // ====== Material modules ======
    MdCardModule,
    MdInputModule,
    MaterialModule,
    // Datepicker modules
    MdDatepickerModule,
    MdNativeDateModule,
    // Select modules
    MdSelectModule,
    MdOptionModule,
    // DataTable
    MdTableModule,
    CdkTableModule,
  ],

  exports: [],
  providers: [],
})
export class UserProfileStatisticModule {}