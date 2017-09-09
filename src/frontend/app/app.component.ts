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
  progress$: Observable<boolean>;

  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ) {
    this.progress$ = store.select(state => state.app.progress);
  }

  routeToProfile() {
    this.userService.routeToProfile();
  }

  routeToHome() {
    this.userService.routeToHome();
  }
}