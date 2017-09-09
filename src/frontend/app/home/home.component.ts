import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(['/login']);
  }
}