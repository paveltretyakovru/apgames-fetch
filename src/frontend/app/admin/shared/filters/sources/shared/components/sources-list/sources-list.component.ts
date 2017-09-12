import { Observable } from 'rxjs/Observable';
import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Source } from '../../../source.model';

@Component({
  selector: 'sources-list',
  styleUrls: ['./sources-list.component.css'],
  templateUrl: './sources-list.component.html',
})
export class SourcesListComponent implements OnInit {
  @Output() sourceUpdated = new EventEmitter();

  @Input() sources$: Observable<Source[]>;
  @Input() enabledSources: Number[] = [];

  sources: Source[] = [];

  ngOnInit() {
    this.sources$.subscribe(s => {
      this.sources = s;
      this.sources.forEach(el => el.checked = false);
    });
  }

  changeItem(event: any, source: Source) {
    this.sourceUpdated.emit((() => {
      let copy = [...this.enabledSources];
      let index = copy.indexOf(+source.id);
      let have: Boolean = index !== -1;

      if (have) {
        if(!event.checked) copy.splice(index, 1);
      } else if (!have) {
        if(event.checked) copy.push(+source.id);
      }

      return copy;
    })());
  }
};