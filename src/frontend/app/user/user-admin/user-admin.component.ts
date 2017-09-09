import { Component, OnInit } from '@angular/core';

// Material components
import { MdDialog } from '@angular/material';

// Self components
import { NewUser } from 'app/shared/models//new-user.model';
import { AdminService } from './shared/admin.service';
import { AddUserFormComponent } from './shared/add-user-form/add-user-form.component';

@Component({
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  newUser: NewUser = { login: '', password: '' };

  constructor(
    public dialog: MdDialog,
    private adminService: AdminService,
  ) { }
  
  ngOnInit() { }

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
}