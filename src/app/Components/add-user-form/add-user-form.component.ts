import {Component, OnInit, signal} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {AuthService} from "../../Core/services/auth.service";
import {UserService} from "../../Core/services/user.service";
import {tap} from "rxjs";
import {CustomValidators} from "../../costum-validators.validator";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    NgIf,
    MatIcon,
    MatIconButton,
    MatAnchor
  ],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css'
})
export class AddUserFormComponent {
  hide = signal(true);
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
    private userService:UserService,
    private snackBar: MatSnackBar
  ) { }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.userService.newUser(this.registerForm.value).pipe(

      tap(() => {
        this.registerForm.reset();
        this.snackBar.open('utilisateur Ajouté avec succes','fermer',{duration:3000})
        this.router.navigate(['admin-dashboard/listOfUsers']);

      })).subscribe();
  }
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}
