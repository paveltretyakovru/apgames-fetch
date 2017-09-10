import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Source } from '../shared/sources-list/source.model';
import { AdminUser } from './admin-user.model';

import { AdminService } from '../shared/admin.service';
import { SourcesService } from '../shared/sources-list/sources.service';
import { AdminUsersService } from './admin-users.service';

@Component({
  selector: '',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  user$: Observable<AdminUser>;
  sources$: Observable<Source[]>;

  constructor(
    private route: ActivatedRoute,
    private service: AdminService,
    private sources: SourcesService,
    private usersService: AdminUsersService
  ) {}

  ngOnInit() {
    this.user$ = this.usersService.getUser(this.route.snapshot.paramMap.get('id'));
    this.sources$ = this.sources.getSources();
  }
};