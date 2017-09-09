import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewUser } from 'app/shared/models/new-user.model';
import { AppState } from 'app/app-state.model';
import { apiRoutes } from 'app/app-routing.module';
import { AppActions } from 'app/app.actions';

@Injectable()
export class AdminService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
  ) {}

  addUser(newUser: NewUser) {
    this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: true });
    this.http.post(apiRoutes.addUser, newUser).subscribe(
      (response) => {
        console.log('User was added', response);
        this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });
      },
      (error) => {
        console.error('User adding is failure', error);
        this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });
      }
    );
  }
}