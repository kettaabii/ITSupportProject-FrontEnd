import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../Core/services/auth.service";
import {UserService} from "../../Core/services/user.service";
import {tap} from "rxjs";
import {CustomValidators} from "../../costum-validators.validator";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatError,
    MatInput,
    MatButton,
    NgIf
  ],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css'
})
export class AddUserFormComponent {
  registerForm = new FormGroup({


      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required])
    },

    { validators: CustomValidators.passwordsMatching }
  )

  constructor(
    private router: Router,
    private userService:UserService
  ) { }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.userService.newUser(this.registerForm.value).pipe(
      // If registration was successfull, then navigate to login route
      tap(() => this.router.navigate(['../login']))
    ).subscribe();
  }

}
