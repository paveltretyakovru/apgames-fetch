import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { AdminUser } from './admin-user.model';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: '',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  user$: Observable<AdminUser>;

  constructor(
    private route: ActivatedRoute,
    private service: AdminService,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.user$ = this.service.getUser(id);
    console.log('Geting user', id, this.user$);
  }
};