import { Component } from '@angular/core';

import { AuthService } from 'app/shared/auth.service';

@Component({
  selector: 'user-profile',
  styleUrls: ['user-profile.component.css'],
  templateUrl: 'user-profile.component.html',
})
export class UserProfileComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    console.log('Logout');
    this.authService.logout();
  }
}