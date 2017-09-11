import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Input, Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';

import { NewUser } from 'app/shared/models/new-user.model';
import { AdminUser } from '../admin-users/admin-user.model';
import { AdminState } from '../admin-state.model';
import { AdminUsersService } from '../admin-users/admin-users.service';
import { AddUserFormComponent } from './shared/components/add-user-form/add-user-form.component';

@Component({
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  newUser: NewUser = { login: '', password: '' };

  constructor(
    public dialog: MdDialog,
    private usersService: AdminUsersService
  ) {}

  ngOnInit() {}

  openAddUserDialog(): void {
    this.newUser = { login: '', password: '' };

    let dialogRef = this.dialog.open(AddUserFormComponent, {
      data: this.newUser,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result) {
        this.usersService.addUser(this.newUser);
      }
    });
  }
};