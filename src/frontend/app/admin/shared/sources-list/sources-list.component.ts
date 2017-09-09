import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sources-list',
  templateUrl: './sources-list.component.html',
})
export class SourcesListComponent implements OnInit {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit() { }
};