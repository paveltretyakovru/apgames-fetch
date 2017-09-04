import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  MdCardModule,
  MdInputModule,
  MaterialModule,
  MdSelectModule,
  MdOptionModule,
  MdNativeDateModule,
  MdDatepickerModule,
} from "@angular/material";

// Self
import { StatisticTableModule } from "./shared/statistic-table/statistic-table.module";
import { UserStatisticComponent } from './user-statistic.component';

@NgModule({
  declarations: [
    UserStatisticComponent,
  ],

  imports: [
    // ====== Angular modules =======
    FormsModule,
    CommonModule,

    // ====== Self modules ==========
    StatisticTableModule,
    
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
  ],

  exports: [],
  providers: [],
})
export class UserStatisticModule {}