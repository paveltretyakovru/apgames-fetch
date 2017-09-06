import { NgModule }       from '@angular/core';
import { FormsModule }    from "@angular/forms";
import { CommonModule }   from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

// Material modules
import {
  MdInputModule,
  MdTableModule,
  MdTooltipModule,
  MdNativeDateModule,
  MdDatepickerModule,
} from "@angular/material";

// Self components and modules
import { DatepickerComponent }      from './shared/datepicker/datepicker.component';
import { StatisticTableComponent }  from "./statistic-table.component";

@NgModule({
  exports:      [ StatisticTableComponent ],
  declarations: [ DatepickerComponent, StatisticTableComponent ],

  imports: [
    // ======== Angular modules ===========
    CommonModule,
    FormsModule,

    // ========= Material modules =========
    MdInputModule,      // Input module
    MdTableModule,      // DataTable modules
    CdkTableModule,
    MdTooltipModule,    // Tooltip
    MdDatepickerModule, // Datepicker modules
    MdNativeDateModule,
  ],
})
export class StatisticTableModule {};