import { Component } from '@angular/core';

export const navRoutes: any[] = [
  { path: 'profile', label: 'Profile', isActive: false },
  { path: 'statistic', label: 'Statistic', isActive: true },
  { path: 'tasks', label: 'Tasks', isActive: false },
  { path: 'admin', label: 'Admin', isActive: false },
];

@Component({
  templateUrl: 'user.component.html',
})
export class UserComponent {
  navRoutes: any[]= navRoutes;
}