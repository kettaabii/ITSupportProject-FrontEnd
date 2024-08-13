import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from "../../Core/services/auth.service";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatCardModule, MatCardContent } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatInput, MatButton, MatLabel, MatFormFieldModule, MatCardContent, MatCheckboxModule, MatAnchor, RouterLink, MatIconButton, MatIcon],
  templateUrl: './login.component.html',
  styleUrl:'login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = signal(true);
  user = () => this.authService?.currentUser();
  isLoggedIn = () => this.authService?.isAuthenticated() ?? false;
  errorMessage='';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          const userRole = this.authService.currentUser()?.role;
          switch(userRole) {
            case 'ADMIN':
              this.router.navigate(['/admin-dashboard']);
              break;
            case 'TECHNICIAN':
              this.router.navigate(['/technician-dashboard']);
              break;
            case 'USER':
              this.router.navigate(['/user-dashboard']);
              break;
            default:
              this.router.navigate(['/dashboard']);
          }
        },
        error: (err) => {
          console.error('Login failed', err);
          this.errorMessage = 'Username Or Password incorrect';
        }
      });
    }
  }
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
