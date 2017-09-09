import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { App } from './app.reducer';
import { PluginsService } from './shared/plugins.service';
import { AppState } from './app-state.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html', 
})

export class AppComponent implements OnInit{
  app$: Observable<App>;
  title: string = 'ApGames Fetch';

  constructor(
    private store: Store<AppState>,
    private plugins: PluginsService,
    private userService: UserService,
  ) {
    console.log('CONSTRUCTOR APP');    
  }
  
  ngOnInit() {
    console.log('INIT APP');
    this.app$ = this.store.select('app');
  }

  routeToProfile() {
    this.userService.routeToProfile();
  }

  routeToHome() {
    this.userService.routeToHome();
  }
}