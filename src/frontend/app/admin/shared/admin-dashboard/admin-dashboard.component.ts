import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';

import { NewUser } from 'app/shared/models/new-user.model';
import { AdminState } from '../../admin-state.model';
import { AdminService } from '../admin.service';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';

@Component({
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashBoardComponent implements OnInit {
  users: any[];
  newUser: NewUser = { login: '', password: '' };

  constructor(
    public dialog: MdDialog,
    private adminService: AdminService,
  ) {
    this.adminService.loadUsers();
  }

  ngOnInit() {
    this.adminService.admin$.subscribe((adminState) => {
      this.users = adminState.users;
    });
  }

  openAddUserDialog(): void {
    this.newUser = { login: '', password: '' };

    let dialogRef = this.dialog.open(AddUserFormComponent, {
      data: this.newUser,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log('After closed', result);
      if(result) {
        this.adminService.addUser(this.newUser);
      }
    });
  }
};