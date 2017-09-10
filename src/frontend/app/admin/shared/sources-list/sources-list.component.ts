import { Observable } from 'rxjs/Observable';
import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Source } from './source.model';

@Component({
  selector: 'sources-list',
  templateUrl: './sources-list.component.html',
})
export class SourcesListComponent implements OnInit {
  sources: Source[] = [];
  @Input() sources$: Observable<Source[]>;

  constructor() { }

  ngOnInit() {
    this.sources$.subscribe(s => {
      this.sources = s;
      this.sources.forEach(el => el.disabled = false);
    });
  }

  selectChangeHandle(event: any) {
    console.log('change handle', event);
  }

  handlerSelectChange(event: any) {
    console.log('focus', event);
  }
};