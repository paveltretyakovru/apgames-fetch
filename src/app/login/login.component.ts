import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthData } from 'app/shared/models/auth-data.model';
import { AuthService } from 'app/shared/auth.service';

@Component({
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  authData: AuthData = { login: '', password: '' };

  constructor(private authService: AuthService) {}

  login(): any {
    this.authService.login({
      failed: (result: boolean) => { console.error('Failed', result) },
      success: (result: boolean) => { console.info('Success', result) },
      authData: this.authData,
    }).subscribe((result: boolean) => {
      console.info('Obser completed', result);
    });
  }
}