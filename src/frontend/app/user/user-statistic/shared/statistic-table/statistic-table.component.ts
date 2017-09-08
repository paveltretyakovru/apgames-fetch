import { Component, OnInit } from '@angular/core';
import { ExampleDataSource } from './shared/example-data-source';

@Component({
  selector: 'statistic-table',
  styleUrls: ['statistic-table.component.css'],
  templateUrl: 'statistic-table.component.html',
})
export class StatisticTableComponent implements OnInit {
  dataSource = new ExampleDataSource();
  displayedColumns = [ 'position', 'date', 'traffic', 'accepted', 'inProcessing',
                       'rejected', 'accrued', 'potentially', 'conversion', 'epc'];
  constructor() {}

  ngOnInit() {}
}