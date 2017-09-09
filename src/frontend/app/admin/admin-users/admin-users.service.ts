import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/map';

// Interfaces
import { NewUser } from 'app/shared/models/new-user.model';
import { AppState } from 'app/app-state.model';
import { AdminState } from '../admin-state.model';
import { AdminUser } from './admin-user.model';

// Actions
import { AdminActions } from 'app/admin/admin.actions';

import { apiRoutes } from 'app/app-routing.module';
import { PluginsService } from 'app/shared/plugins.service';


@Injectable()
export class AdminUsersService {
  users$: Observable<AdminUser[]>;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router,
    private plugins: PluginsService,
  ) {}

  addUser(newUser: NewUser) {
    this.plugins.showProgress();

    this.http.post(apiRoutes.addUser, newUser).subscribe(
      (response) => {
        this.store.dispatch({ type: AdminActions.ADD_USER, payload: response['user'] });

        this.plugins.hideProgress();
        this.plugins.showSnackBar(response['message']);
      },
      (error) => {
        this.plugins.hideProgress();
        this.plugins.showSnackBar(error['error']['message']);
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
    this.plugins.showProgress();
    let req = this.http.get<AdminUser[]>(apiRoutes.loadUsers);
    
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
  
  routeToUser(id: Number | string) {
    this.router.navigate([`/user/admin/users/${id}`]);
  }
}