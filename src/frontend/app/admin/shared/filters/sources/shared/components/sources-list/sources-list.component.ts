import { Observable } from 'rxjs/Observable';
import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Source } from '../../../source.model';

@Component({
  selector: 'sources-list',
  styleUrls: ['./sources-list.component.css'],
  templateUrl: './sources-list.component.html',
})
export class SourcesListComponent implements OnInit {
  @Input() sources$: Observable<Source[]>;
  sources: Source[] = [];

  ngOnInit() {
    this.sources$.subscribe(s => {
      this.sources = s;
      this.sources.forEach(el => el.checked = false);
    });
  }

  changeItem(source:Source) {
    source.checked = !source.checked;
  }
};