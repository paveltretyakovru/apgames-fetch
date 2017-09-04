import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

// Material modules
import {
  MdTableModule,
  MdTooltipModule,
} from "@angular/material";

import { StatisticTableComponent } from "./statistic-table.component";

@NgModule({
  declarations: [ StatisticTableComponent ],
  imports: [
    // Angular modules
    CommonModule,

    // ========= Material modules =========
    // DataTable modules
    MdTableModule,
    CdkTableModule,
    // Tooltip
    MdTooltipModule,
  ],
  exports: [ StatisticTableComponent ],
  providers: [],
})
export class StatisticTableModule {};