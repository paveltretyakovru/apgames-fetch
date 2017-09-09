import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Source } from './source.model';
import { AppState } from 'app/app-state.model';

@Injectable()
export class SourcesService {
  constructor(
    private store: Store<AppState>
  ) {}

  getSources() {
    return this.store.select(s => s.admin.sources);
  }
}