import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users: any[];
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit() { }
};