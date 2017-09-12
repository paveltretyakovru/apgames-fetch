import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Source } from '../shared/filters/sources/source.model';
import { AdminUser } from './admin-user.model';

import { AdminService } from '../admin.service';
import { SourcesService } from '../shared/filters/sources/sources.service';
import { AdminUsersService } from './admin-users.service';

@Component({
  selector: '',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  user$: Observable<AdminUser>;
  sources$: Observable<Source[]>;
  
  userId: string;
  userSources: Number[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: AdminService,
    private sources: SourcesService,
    private usersService: AdminUsersService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.user$ = this.usersService.getUser(this.userId);
    this.sources$ = this.sources.getSources();

    this.user$.subscribe(user => {
        this.userSources = (user && user.sources) ? user.sources : [];
    });
  }

  handleUpdateSource(sources: Number[]): void {
    console.log('Handle updated', sources);
    this.usersService.updateUserSources({ sources, userId: this.userId });
  }
};