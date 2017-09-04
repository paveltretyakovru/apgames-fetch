import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppState } from 'app/app-state.model';
import { AuthData } from 'app/shared/models/auth-data.model';
import { UserActions } from 'app/user/user.actions';

@Injectable()
export class AuthService {
  constructor(private store: Store<AppState>, private router: Router) {}

  setUserAuth(value: boolean): void {
    this.store.dispatch({ type: UserActions.SET_USER_AUTH, payload: value });
  }

  login(options: {failed: any, success: any, authData: AuthData})
    : Observable<boolean> {
    
      // Imitation of login
      return Observable.of([true, false][Math.floor(Math.random()*2)])
        .delay(1000)
        .do((val: boolean) => {
          
          // Random currect login & password
          if(val) {
            options.success(val);

            this.store.dispatch({ type: UserActions.SET_USER_AUTH, payload: true });
            this.router.navigate(['user/profile/statistic']);

            return true;
          } else {
            options.failed(val);
            return false;
          }
        });
    }
}