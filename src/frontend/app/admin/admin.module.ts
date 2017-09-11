import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MdCardModule,  
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdDialogModule,
  MdGridListModule,
  MdSnackBarModule,
  MdCheckboxModule,
  MdSlideToggleModule,
} from "@angular/material";

import { AdminRoutingModule } from './admin-routing.module';

import { AdminService } from './shared/admin.service';
import { SourcesService } from './shared/sources-list/sources.service';
import { AdminUsersService } from './admin-users/admin-users.service';

import { AdminComponent } from './admin.component';
import { UsersListComponent } from './shared/users-list/users-list.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SourcesListComponent } from './shared/sources-list/sources-list.component';
import { AddUserFormComponent } from './shared/add-user-form/add-user-form.component';
import { AdminDashBoardComponent } from './shared/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
    AdminUsersComponent,
    SourcesListComponent,
    AddUserFormComponent,
    AdminDashBoardComponent,
  ],
  imports: [
    // Andular modules
    FormsModule,
    CommonModule,
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
    MdCheckboxModule,
    MdGridListModule,
    MdSnackBarModule,
    MdSlideToggleModule,
  ],
  entryComponents: [ AddUserFormComponent ],
  providers: [ AdminService, AdminUsersService, SourcesService ],
})
export class AdminModule {};