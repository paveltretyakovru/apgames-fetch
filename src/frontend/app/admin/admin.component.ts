import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { AdminService } from './shared/admin.service';
import { AdminUsersService } from './admin-users/admin-users.service';

@Component({
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  constructor(
    private service: AdminService,
    private userService: AdminUsersService,
  ) {}
  
  ngOnInit() {
    
    // Fetch users
    this.userService.loadUsers();
  }
}