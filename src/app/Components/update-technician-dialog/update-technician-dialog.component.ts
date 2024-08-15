import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../Core/services/user.service";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {User} from "../../Core/models/user";
import {Technician} from "../../Core/models/technician";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-update-technician-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    MatOption,
    MatSelect,
    FormsModule,
    NgForOf
  ],
  templateUrl: './update-technician-dialog.component.html',
  styleUrl: './update-technician-dialog.component.css'
})
export class UpdateTechnicianDialogComponent implements OnInit{
  updateForm!:FormGroup;
  technicianStatuses: string[] = ['DISPONIBLE', 'UNDISPONIBLE'];
  constructor(private fb: FormBuilder,
              private userService: UserService,
              public dialogRef: MatDialogRef<UpdateTechnicianDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Technician) {

  }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      username: [this.data.username, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      phone: [this.data.phone, Validators.required],
      password:[this.data.password,Validators.required],
      status:[this.data.inDuty,Validators.required]
    });

  }
  onSubmit() {
    if (this.updateForm.valid) {
      this.userService.updateUser(this.data.id, this.updateForm.value).subscribe(
        () => {
          this.dialogRef.close(true);
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
    }
  }
  onCancel() {
    this.dialogRef.close();
  }


}
