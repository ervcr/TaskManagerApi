import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Add this import


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.username, this.password, this.email).subscribe({
      next: () => {
        this.router.navigate(['/login']); // Redirect to login after successful registration
      },
      error: () => {
        this.errorMessage = 'Username is already taken';
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']); // Navigate to login page
  }
}
