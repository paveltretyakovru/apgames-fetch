import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Source } from './source.model';
import { AppState } from 'app/app-state.model';

import { AdminActions } from 'app/admin/admin.actions';
import { PluginsService } from 'app/shared//plugins.service';

import { apiRoutes } from 'app/app-routing.module';

@Injectable()
export class SourcesService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private plugins: PluginsService
  ) {}

  getSources(): Observable<Source[]> {
    return this.store.select(s => s.admin.sources);
  }

  loadSources(): Observable<Source[]> {
    this.plugins.showProgress();
    let req = this.http.get<Source[]>(apiRoutes.loadSources);
    
    req.subscribe(
      response => {
        this.store.dispatch({type: AdminActions.SET_USERS, payload: response});
        this.plugins.hideProgress();
      },
      error => {
        this.plugins.showSnackBar('Fetching data eror');
        this.plugins.hideProgress();
      }
    );

    return req;
  }
}