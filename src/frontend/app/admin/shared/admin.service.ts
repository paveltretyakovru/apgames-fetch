import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Material components
import {MdSnackBar} from '@angular/material';

import { NewUser } from 'app/shared/models/new-user.model';
import { AppState } from 'app/app-state.model';
import { apiRoutes } from 'app/app-routing.module';
import { AppActions } from 'app/app.actions';
import { AdminActions } from 'app/admin/admin.actions';

@Injectable()
export class AdminService {
  constructor(
    public snackBar: MdSnackBar,

    private http: HttpClient,
    private store: Store<AppState>,
  ) {}

  addUser(newUser: NewUser) {
    this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: true });
    this.http.post(apiRoutes.addUser, newUser).subscribe(
      (response) => {
        console.log('User was added', response);
        this.store.dispatch({ type: AdminActions.ADD_USER, payload: response['user'] });
        this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });

        if(response['message']) {
          this.snackBar.open(response['message'], 'close');
        }
      },
      (error) => {
        console.error('User adding is failure', error);
        this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });

        if(error['error']['message']) {
          this.snackBar.open(error['error']['message'], 'close');
        }
      }
    );
  }

  loadUsers() {
    this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: true });
    this.http.get(apiRoutes.loadUsers).subscribe(
      (response) => {
        console.log('Users was loaded', response);
        this.store.dispatch({ type: AdminActions.SET_USERS, payload: response });
        this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });
      },
      (error) => {
        console.error('Users load is failure', error);
        this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });
      }
    );
  }
}