import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiRoutes } from 'app/shared/api-routes';
import { AdminActions } from './admin.actions';
import { PluginsService } from 'app/shared/plugins.service';

import { AppState } from 'app/app-state.model';
import { AdminState } from './admin-state.model';

@Injectable()
export class AdminService {
  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
    private plugins: PluginsService,
  ) {}

  loadAdminState() {
    this.plugins.showProgress();
    let req = this.http.get<AdminState>(apiRoutes.loadAdminState);
    this.setStateFetchListeners(req);

    return req;
  }

  setStateFetchListeners(req: Observable<AdminState>) {
    return req.subscribe(
      response => {
        this.store.dispatch({type: AdminActions.FETCH_STATE, payload: response});
        this.plugins.hideProgress();
      },
      error => {
        this.plugins.showSnackBar('Fetching data eror');
        this.plugins.hideProgress();
      }
    );
  }
}