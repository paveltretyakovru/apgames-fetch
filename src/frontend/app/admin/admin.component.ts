import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { AdminService } from './shared/admin.service';

@Component({
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  constructor(
    private service: AdminService
  ) {}
  
  ngOnInit() {
    
    // Fetch users
    this.service.loadUsers();
  }
}