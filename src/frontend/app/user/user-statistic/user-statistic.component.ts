import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3002/api/statistic').subscribe((data) => {
      console.log('Data =>', data);
    });
  }
}