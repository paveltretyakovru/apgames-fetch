import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdIconModule,
  MdCardModule,
  MdListModule,
  MdInputModule,
  MdButtonModule,
} from "@angular/material";

import { UsersListComponent } from "./shared/components/users-list/users-list.component";
import { AdminHomeComponent } from "./admin-home.component";
import { AddUserFormComponent } from "./shared/components/add-user-form/add-user-form.component";

@NgModule({
  declarations: [ AdminHomeComponent, AddUserFormComponent, UsersListComponent ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    
    MdIconModule,
    MdCardModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
  ],
  exports: [],
  providers: [],
  entryComponents: [ AddUserFormComponent ],
})
export class AdminHomeModule {};