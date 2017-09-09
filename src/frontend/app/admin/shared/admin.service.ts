import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/map';

// Material components
import {MdSnackBar} from '@angular/material';

import { NewUser } from 'app/shared/models/new-user.model';
import { AppState } from 'app/app-state.model';
import { apiRoutes } from 'app/app-routing.module';
import { AppActions } from 'app/app.actions';
import { AdminActions } from 'app/admin/admin.actions';
import { AdminState } from '../admin-state.model';
import { AdminUser } from '../admin-users/admin-user.model';

@Injectable()
export class AdminService {
  users$: Observable<AdminUser[]>;

  constructor(
    public snackBar: MdSnackBar,

    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router
  ) {}

  addUser(newUser: NewUser) {
    this.showProgress();

    this.http.post(apiRoutes.addUser, newUser).subscribe(
      (response) => {
        this.store.dispatch({ type: AdminActions.ADD_USER, payload: response['user'] });

        this.hideProgress();
        this.showSnackBar(response['message']);
      },
      (error) => {
        this.hideProgress();
        this.showSnackBar(error['error']['message']);
      }
    );
  }

  getUser(id: string): Observable<AdminUser> {
    return this.store.select(state => {
      let index = state.admin.users.findIndex(el => el.id === id);
      return state.admin.users[index];
    });
  }

  getUsers(): Observable<AdminUser[]> {
    return this.store.select(state => state.admin.users);
  }

  loadUsers(): Observable<AdminUser[]> {
    this.showProgress();
    let req = this.http.get<AdminUser[]>(apiRoutes.loadUsers);
    
    req.subscribe(
      response => {
        this.store.dispatch({type: AdminActions.SET_USERS, payload: response});
        this.hideProgress();
      },
      error => {
        this.showSnackBar('Fetching data eror');
        this.hideProgress();
      }
    );

    return req;
  }

  showProgress(): void {
    this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: true });
  }
  
  hideProgress(): void {
    this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });
  }
  
  routeToUser(id: Number | string) {
    this.router.navigate([`/user/admin/users/${id}`]);
  }

  showSnackBar(
    message: string,
    action: any = 'close',
    config: object = { duration: 2000 }
  ): void {
    if(message) this.snackBar.open(message, action, config);
  }
}