import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common'; // Add this import
import { FormsModule } from '@angular/forms';   // Add this import


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/tasks']);
      },
      error: () => {  // You can remove 'err' if not needed
        this.errorMessage = 'Invalid credentials';
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']); // Navigates to the register page
  }
}
