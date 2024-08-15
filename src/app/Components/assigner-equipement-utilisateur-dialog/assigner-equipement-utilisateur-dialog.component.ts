import {Component, Inject, numberAttribute, OnInit} from '@angular/core';
import {User} from "../../Core/models/user";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef} from "@angular/material/dialog";
import {TechnicianService} from "../../Core/services/technician.service";
import {AssignTechnicianDialogComponent} from "../assign-technician-dialog/assign-technician-dialog.component";
import {EquipementService} from "../../Core/services/equipement.service";
import {UserService} from "../../Core/services/user.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Equipement} from "../../Core/models/equipement";

@Component({
  selector: 'app-assigner-equipement-utilisateur-dialog',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    MatButton,
    MatDialogActions
  ],
  templateUrl: './assigner-equipement-utilisateur-dialog.component.html',
  styleUrl: './assigner-equipement-utilisateur-dialog.component.css'
})
export class AssignerEquipementUtilisateurDialogComponent implements OnInit{
  users:User[]=[];
  selectedUser: any;

  constructor(
    private dialogRef: MatDialogRef<AssignerEquipementUtilisateurDialogComponent>,
    private equipementService:EquipementService,
    private userService:UserService,
    private snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Equipement
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.allusers().subscribe(
      users => this.users = users,
      error => console.error('Error loading users:', error)
    );
  }


  onSubmit() {
    if (this.selectedUser && this.data.materialId) {
      this.equipementService.assignEquipementToUser(this.data.materialId, this.selectedUser).subscribe(
        response => {
          this.dialogRef.close(this.selectedUser.id);
          this.snackBar.open('Matériel Assigné avec succès', 'Fermer', {duration: 3000});
        },
        error => {
          console.error('Error assigning equipment:', error);
          this.snackBar.open('Erreur lors de l\'assignation du matériel', 'Fermer', {duration: 3000});
        }
      );
    } else {
      console.error('Material ID or selected user is undefined.');
      this.snackBar.open('Erreur : Matériel ou utilisateur non défini.', 'Fermer', {duration: 3000});
    }
  }
  cancel(){
    this.dialogRef.close();
  }

}
