import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { AppState } from 'app/app-state.model';
import { AuthData } from 'app/shared/models/auth-data.model';
import { apiRoutes } from 'app//app-routing.module';
import { AppActions } from 'app/app.actions';
import { UserActions } from 'app/user/user.actions';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router,
  ) {}

  setUserAuth(value: boolean): void {
    this.store.dispatch({ type: UserActions.SET_USER_AUTH, payload: value });
  }

  login(options: {authData: AuthData})
    : any {
      this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: true });

      return this.http.post(apiRoutes.login, options.authData).subscribe(
        
        // Login is success
        (response: any) => {
          console.log('Login result => ', response);
          this.store.dispatch({ type: UserActions.SET_USER_AUTH, payload: true });
          this.router.navigate(['user/statistic']);
          this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });
        },

        // Login is failure
        (error: any) => {
          console.error('Login is failure', error);
          this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });
        }
      );
    }

    logout() {
      this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: true });
      this.store.dispatch({ type: UserActions.SET_USER_AUTH, payload: false });
      this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });
      this.router.navigate(['login']);
    }
}