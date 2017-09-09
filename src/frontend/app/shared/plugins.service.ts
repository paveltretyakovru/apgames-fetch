import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

// Interfaces
import { App } from 'app/app.reducer'; 
import { AppState } from 'app/app-state.model';

// Actions
import { AppActions } from 'app/app.actions';

@Injectable()
export class PluginsService {
  constructor(
    public snackBar: MdSnackBar,
    private store: Store<AppState>,
  ) {}

  // ============= PROGRESS BAR =============
  showProgress(): void {
    this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: true });
  }
  
  hideProgress(): void {
    setTimeout(() => {
      this.store.dispatch({ type: AppActions.SET_APP_PROGRESS, payload: false });  
    }, 500);
  }

  // ============= SNACK BAR ================
  showSnackBar(
    message: string,
    action: any = 'close',
    config: object = { duration: 2000 }
  ): void {
    if(message) this.snackBar.open(message, action, config);
  }
}