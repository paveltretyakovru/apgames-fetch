import { Component } from '@angular/core';

import { navRoutes } from 'app/app-routing.module';

@Component({
  selector: 'user-profile-wrapper',
  styleUrls: ['user-profile.component.css'],
  templateUrl: 'user-profile.component.html',
})
export class UserProfileComponent {
  navRoutes: any[] = navRoutes;
}