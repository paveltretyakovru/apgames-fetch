
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

import { AdminUser } from 'app/admin/admin-users/admin-user.model';
import { AdminService } from 'app/admin/admin.service';
import { AdminUsersService } from 'app/admin/admin-users/admin-users.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users$: Observable<AdminUser[]>;

  constructor(
    private service: AdminService,
    private usersService: AdminUsersService
  ) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }

  routeToUser(id: Number | string) {
    this.usersService.routeToUser(id);
  }
};