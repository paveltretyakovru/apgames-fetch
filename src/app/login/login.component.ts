import { Component } from '@angular/core';

@Component({
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  authData: { login: string, password: string } = { login: '', password: '' };
}