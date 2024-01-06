// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLoginOptions = true;
  showRegistrationForm = false;

  showLoginForm(type: string) {
    console.log(`Showing ${type} login form`);
  }
toggleRegistrationForm() {
  console.log('Toggling registration form');
  this.showRegistrationForm = !this.showRegistrationForm;
}

  handleRegistrationSuccess(success: boolean) {
    if (success) {
      this.showRegistrationForm = false;
    }
  }
}
