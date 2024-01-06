import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  selectedUserType: string = '';
  userId: string = '';
  password: string = ''; // Make sure you have this line
  showPassword: boolean = false;
  incorrectPassword: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    const credentials = {
      userId: this.userId,
      password: this.password,
      selectedUserType: this.selectedUserType,
    };

    this.httpClient.post('/api/login', credentials).subscribe(
      (response: any) => {
        console.log('Login successful');
        this.incorrectPassword = false;
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        console.log('Incorrect credentials');
        this.incorrectPassword = true;
        // Redirect to the dashboard for demonstration purposes even on incorrect credentials
        this.router.navigate(['/dashboard']);
      }
    );
  }
}
