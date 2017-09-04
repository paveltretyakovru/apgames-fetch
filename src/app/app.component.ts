import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { App } from './app.reducer';
import { AppState } from './app-state.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html', 
})

export class AppComponent {
  title: string = 'ApGames Fetch';
  appState$: Observable<any>;
  progress: boolean;

  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ) {
    this.appState$ = store.select('app');

    this.appState$.subscribe((appState: App) => {
      this.progress = appState.progress;
    });
  }

  routeToProfile() {
    this.userService.routeToProfile();
  }

  routeToHome() {
    this.userService.routeToHome();
  }
}