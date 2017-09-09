import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';

import { NewUser } from 'app/shared/models/new-user.model';
import { AppState } from 'app/app-state.model';
import { AdminUser } from '../../admin-users/admin-user.model';
import { AdminState } from '../../admin-state.model';
import { AdminService } from '../admin.service';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';

@Component({
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashBoardComponent implements OnInit {
  newUser: NewUser = { login: '', password: '' };
  users$: Observable<AdminUser[]>;

  constructor(
    public dialog: MdDialog,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.users$ = this.adminService.loadUsers();
  }

  openAddUserDialog(): void {
    this.newUser = { login: '', password: '' };

    let dialogRef = this.dialog.open(AddUserFormComponent, {
      data: this.newUser,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result) {
        this.adminService.addUser(this.newUser);
      }
    });
  }
};