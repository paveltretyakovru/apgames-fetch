import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MdCardModule,  
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdDialogModule,
  MdSnackBarModule,
} from "@angular/material";

import { AdminService } from './shared/admin.service';
import { AdminComponent } from './admin.component';
import { UsersListComponent } from './shared/users-list/users-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AddUserFormComponent } from './shared/add-user-form/add-user-form.component';
import { AdminDashBoardComponent } from './shared/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
    AdminUsersComponent,
    AddUserFormComponent,
    AdminDashBoardComponent,
  ],
  imports: [
    // Andular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    // Self modules
    AdminRoutingModule,

    // Material modules
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdDialogModule,
    MdSnackBarModule,
  ],
  entryComponents: [ AddUserFormComponent ],
  providers: [ AdminService ],
})
export class AdminModule {};