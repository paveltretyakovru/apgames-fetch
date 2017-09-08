import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';

// Material modules
import {
  MdCardModule,
  MaterialModule,
  MdSelectModule,
  MdOptionModule,
  MdDatepickerModule,
  MdNativeDateModule,
} from "@angular/material";

// Self
import { DatepickerComponent }      from './shared/datepicker/datepicker.component';
import { StatisticTableModule }   from "./shared/statistic-table/statistic-table.module";
import { UserStatisticComponent } from './user-statistic.component';

@NgModule({
  declarations: [ UserStatisticComponent, DatepickerComponent ],

  imports: [
    // ====== Angular modules =======
    FormsModule,
    CommonModule,

    // ====== Self modules ==========
    StatisticTableModule,
    
    // ====== Material modules ======
    MdCardModule,
    MaterialModule,
    // Select modules
    MdSelectModule,
    MdOptionModule,
    MdDatepickerModule, // Datepicker modules
    MdNativeDateModule,
  ],
})
export class UserStatisticModule {}