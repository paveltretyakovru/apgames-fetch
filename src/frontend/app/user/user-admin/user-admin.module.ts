import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminComponent } from './user-admin.component';
import { UserAdminRoutingModule } from './user-admin-routing.module';

@NgModule({
  declarations: [ UserAdminComponent ],
  imports: [
    // Andular modules
    CommonModule,
    
    // Self modules
    UserAdminRoutingModule
  ],
})
export class UserAdminModule {};