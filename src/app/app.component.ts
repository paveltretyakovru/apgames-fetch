import { Component } from '@angular/core';

import { UserService } from './user/user.service';

@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html', 
})

export class AppComponent {
  title: string = 'ApGames Fetch';

  constructor(
    private userService: UserService
  ) {}

  routeToProfile() {
    this.userService.routeToProfile();
  }

  routeToHome() {
    this.userService.routeToHome();
  }
}