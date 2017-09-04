import { Component } from '@angular/core';

import { AuthService } from 'app/shared/auth.service';

@Component({
  templateUrl: 'user-profile-index.component.html',
})
export class UserProfileIndexComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    console.log('Logout');
    this.authService.logout();
  }
}