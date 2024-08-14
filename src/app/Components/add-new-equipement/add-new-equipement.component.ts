import {Component, signal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EquipementService} from "../../Core/services/equipement.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {tap} from "rxjs";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatDialogActions, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-add-new-equipement',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    NgIf,
    ReactiveFormsModule,
    MatLabel,
    MatDialogTitle,
    MatDialogActions
  ],
  templateUrl: './add-new-equipement.component.html',
  styleUrl: './add-new-equipement.component.css'
})
export class AddNewEquipementComponent {
  addForm: FormGroup;
  selectedFile: File | null = null;


  constructor(private equipementService:EquipementService,
              private snackBar:MatSnackBar,
              private fb:FormBuilder,
              private dialogRef: MatDialogRef<AddNewEquipementComponent>,) {
    this.addForm = this.fb.group({
      materialName: ['', Validators.required],
      status: ['HORS_SERVICE'],
      picture: ['', Validators.required]
    });

  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      this.addForm.patchValue({ picture: this.selectedFile.name });
    }
  }

  newEquipement() {
    if (this.addForm.valid && this.selectedFile) {

      this.uploadImage().then(imagePath => {

        const equipmentData = {
          ...this.addForm.value,
          picture: imagePath
        };
        this.equipementService.addNewEquipement(equipmentData).pipe(
          tap(() => {
            this.addForm.reset();
            this.selectedFile = null;
            this.snackBar.open('Équipement ajouté avec succès', 'Fermer', {duration: 3000});
          })
        ).subscribe();
      }).catch(error => {
        console.error('Error uploading image:', error);
        this.snackBar.open('Erreur lors de l upload de l image', 'Fermer', {duration: 3000});
      });
      this.dialogRef.close();
    }
  }

  private async uploadImage(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.selectedFile) {
          resolve(`/assets/${this.selectedFile.name}`);
        } else {
          reject('No file selected');
        }
      }, 1000);
    });
  }


}
