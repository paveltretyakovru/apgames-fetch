import { Component, OnInit } from '@angular/core';
import { ExampleDataSource } from './shared/example-data-source';

@Component({
  selector: 'statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.css']
})
export class StatisticTableComponent implements OnInit {
  displayedColumns = [
    'position',
    'date',
    'traffic',
    'accepted',
    'inProcessing',
    'rejected',
    'accrued',
    'potentially',
    'conversion',
    'epc',
  ];
  dataSource = new ExampleDataSource();

  constructor() { }

  ngOnInit() { }
}