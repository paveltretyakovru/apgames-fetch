import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppState } from 'app/app-state.model';
import { AuthData } from 'app/shared/models/auth-data.model';
import { AppActions } from 'app/app.actions';
import { UserActions } from 'app/user/user.actions';

@Injectable()
export class AuthService {
  constructor(private store: Store<AppState>, private router: Router) {}

  setUserAuth(value: boolean): void {
    this.store.dispatch({ type: UserActions.SET_USER_AUTH, payload: value });
  }

  login(options: {failed: any, success: any, authData: AuthData})
    : Observable<boolean> {
      this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: true });

      // Imitation of login
      return Observable.of([true, false][Math.floor(Math.random()*2)])
        .delay(2000)
        .do((val: boolean) => {
          
          // Random currect login & password
          if(val) {
            options.success(val);

            this.store.dispatch({ type: UserActions.SET_USER_AUTH, payload: true });
            this.router.navigate(['user/statistic']);
            this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });

            return true;
          } else {
            options.failed(val);
            this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });            
            return false;
          }
        });
    }

    logout() {
      this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: true });
      this.store.dispatch({ type: UserActions.SET_USER_AUTH, payload: false });
      this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });
      this.router.navigate(['login']);
    }
}