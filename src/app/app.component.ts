import { Component } from '@angular/core';

import { navRoutes } from './app-routing.module';
import { UserService } from './user/user.service';

@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html', 
})

export class AppComponent {
  title: string = 'ApGames Fetch';
  navRoutes: any[] = navRoutes;

  constructor(
    private userService: UserService
  ) {}

  routeToProfile() {
    this.userService.routeToProfile();
  }
}