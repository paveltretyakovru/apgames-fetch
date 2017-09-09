
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

import { AdminUser } from '../../admin-users/admin-user.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users$: Observable<AdminUser[]>;

  constructor(private service: AdminService) { }

  ngOnInit() { }

  routeToUser(id: Number | string) {
    this.service.routeToUser(id);
  }
};