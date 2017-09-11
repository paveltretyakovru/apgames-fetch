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

import { AdminService } from './admin.service';
import { SourcesService } from './shared/filters/sources/sources.service';
import { AdminUsersService } from './admin-users/admin-users.service';

import { AdminComponent } from './admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SourcesListComponent } from './shared/filters/sources/shared/components/sources-list/sources-list.component';
import { AdminHomeModule } from "./admin-home/admin-home.module";

@NgModule({
  declarations: [
    AdminComponent,
    AdminUsersComponent,
    SourcesListComponent,
  ],
  imports: [
    // Andular modules
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    
    // Self modules
    AdminHomeModule,
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
  exports: [ ],
  providers: [ AdminService, AdminUsersService, SourcesService ],
})
export class AdminModule {};