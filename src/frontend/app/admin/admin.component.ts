import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

// Material components
import { MdDialog } from '@angular/material';

// Self components
import { NewUser } from 'app/shared/models//new-user.model';
import { AppState } from 'app/app-state.model';
import { AdminService } from './shared/admin.service';
import { AddUserFormComponent } from './shared/add-user-form/add-user-form.component';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[];
  newUser: NewUser = { login: '', password: '' };
  admin$: Observable<any>;

  constructor(
    public dialog: MdDialog,

    private store: Store<AppState>,
    private adminService: AdminService,
  ) {
    this.adminService.loadUsers();
  }
  
  ngOnInit() {
    this.admin$ = this.store.select('admin');
    this.admin$.subscribe((adminState) => {
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
}