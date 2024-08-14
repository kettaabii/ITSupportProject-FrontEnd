import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../Core/services/user.service";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {User} from "../../Core/models/user";
import {EquipementService} from "../../Core/services/equipement.service";
import {Equipement} from "../../Core/models/equipement";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {StatusMat} from "../../Core/enums/status-mat.enum";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-update-equipement-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    NgForOf,MatLabel
  ],
  templateUrl: './update-equipement-dialog.component.html',
  styleUrl: './update-equipement-dialog.component.css'
})
export class UpdateEquipementDialogComponent  implements OnInit{
  updateForm!: FormGroup;
  users:User[]=[];
  statusOptions=Object.values(StatusMat)
  constructor(
    private fb: FormBuilder,
    private equipementService: EquipementService,
    private userService:UserService,
    public dialogRef: MatDialogRef<UpdateEquipementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Equipement
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.updateForm=this.fb.group({
      materialName :[this.data.materialName,Validators.required],
      status:[this.data.status,Validators.required],
      utilisateur:[this.data.utilisateur?.id,Validators.required],
      picture:[this.data.picture,Validators.required],


    })
  }

  loadUsers() {
    this.userService.allusers().subscribe(
      users => this.users = users,
      error => console.error('Error loading users:', error)
    );
  }
  onSubmit() {
    if (this.updateForm.valid) {
      const formData = this.updateForm.value;
      formData.utilisateur = { id: formData.utilisateur };

      this.equipementService.updateEquipement(this.data.materialId, formData).subscribe(
        () => {
          this.dialogRef.close(true);
        },
        error => {
          console.error('Error updating equipment:', error);
        }
      );
    }
  }
  onCancel() {
    this.dialogRef.close();
  }

}
