import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MdListModule,
  MdInputModule,
  MdButtonModule,
  MdDialogModule,
} from "@angular/material";

import { AdminService } from './shared/admin.service';
import { UsersListComponent } from './shared/users-list/users-list.component';
import { UserAdminComponent } from './user-admin.component';
import { AddUserFormComponent } from './shared/add-user-form/add-user-form.component';
import { UserAdminRoutingModule } from './user-admin-routing.module';

@NgModule({
  declarations: [
    UsersListComponent,
    UserAdminComponent,
    AddUserFormComponent,
  ],
  imports: [
    // Andular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    // Self modules
    UserAdminRoutingModule,

    // Material modules
    MdListModule,
    MdButtonModule,
    MdDialogModule,
    MdInputModule,
  ],
  entryComponents: [ AddUserFormComponent ],
  providers: [ AdminService ],
})
export class UserAdminModule {};