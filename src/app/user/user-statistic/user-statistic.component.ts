import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'user-statistic',
  styleUrls: ['user-statistic.component.css'],
  templateUrl: 'user-statistic.component.html',
})
export class UserStatisticComponent {
  selectedValue: string;

  sources = [
    { value: 'app', viewValue: 'App' },
    { value: 'dash', viewValue: 'Dash' },
    { value: 'samara', viewValue: 'Samara' },
  ];
}