import { Observable } from 'rxjs/Observable';
import { Input, Component, OnInit } from '@angular/core';

import { App } from 'app/app.reducer';

@Component({
  selector: 'request-bar',
  template: `<div *ngIf="progress" id="progress-bar-wrapper">
    <md-progress-bar mode="query">
    </md-progress-bar>
  </div>`,
})
export class RequestBarComponent implements OnInit {
  @Input() app$: Observable<App>;
  progress: Boolean = false;

  constructor() {}

  ngOnInit() {
    this.app$
      .subscribe(app => this.progress = app.progress);
  }
};