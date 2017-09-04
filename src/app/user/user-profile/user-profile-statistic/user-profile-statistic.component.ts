import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'user-profile-statistic',
  styleUrls: ['user-profile-statistic.component.css'],
  templateUrl: 'user-profile-statistic.component.html',
})
export class UserProfileStatisticComponent {
  selectedValue: string;

  sources = [
    { value: 'app', viewValue: 'App' },
    { value: 'dash', viewValue: 'Dash' },
    { value: 'samara', viewValue: 'Samara' },
  ];
}