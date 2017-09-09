import { Injectable } from '@angular/core';

import { PluginsService } from 'app/shared/plugins.service';


@Injectable()
export class AdminService {
  constructor(
    private plugins: PluginsService,
  ) {}
}