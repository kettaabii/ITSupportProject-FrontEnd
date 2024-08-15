import {Component, Inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomValidators} from "../../costum-validators.validator";
import {TechnicianService} from "../../Core/services/technician.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialogRef} from "@angular/material/dialog";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {tap} from "rxjs";

@Component({
  selector: 'app-add-technician-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './add-technician-dialog.component.html',
  styleUrl: './add-technician-dialog.component.css'
})
export class AddTechnicianDialogComponent {
  hide=signal(true)
  addTechnicianForm=new FormGroup({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required])
  },{ validators: CustomValidators.passwordsMatching })
  constructor(private technicianService:TechnicianService,
              private snackBar:MatSnackBar,
              public dialogRef:MatDialogRef<AddTechnicianDialogComponent>
  ){
  }
  register(){
    if(!this.addTechnicianForm.valid){
      return;
    }
    this.technicianService.newTechnician(this.addTechnicianForm.value).pipe(
      tap(()=>{this.snackBar.open('technician added successfuly','fermer',{duration:3000}),
        this.dialogRef.close()})
    ).subscribe();
  }
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }




}
