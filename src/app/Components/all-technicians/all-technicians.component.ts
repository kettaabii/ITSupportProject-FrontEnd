import {Component, OnInit} from '@angular/core';
import {Technician} from "../../Core/models/technician";
import {TechnicianService} from "../../Core/services/technician.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatCard} from "@angular/material/card";
import {MatChip} from "@angular/material/chips";
import {NgClass, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {AddTechnicianDialogComponent} from "../add-technician-dialog/add-technician-dialog.component";
import {UpdateTechnicianDialogComponent} from "../update-technician-dialog/update-technician-dialog.component";
import {MaterialDetailsDialogComponent} from "../material-details-dialog/material-details-dialog.component";
import {Equipement} from "../../Core/models/equipement";
import {UpdateEquipementDialogComponent} from "../update-equipement-dialog/update-equipement-dialog.component";

@Component({
  selector: 'app-all-technicians',
  standalone: true,
  imports: [
    MatCard,
    MatChip,
    NgForOf,
    MatButton,
    NgClass
  ],
  templateUrl: './all-technicians.component.html',
  styleUrl: './all-technicians.component.css'
})
export class AllTechniciansComponent implements OnInit{
  technicians:Technician[]=[];

  constructor(private technicianService:TechnicianService,
              private dialog:MatDialog,
              private snackBar:MatSnackBar) {
  }

  ngOnInit(): void {
    this.getAllTechnicians()
  }

  getAllTechnicians():void{
    this.technicianService.getAllTechnicians().subscribe({
      next:(technicians)=>this.technicians=technicians,
      error:(err)=>this.snackBar.open('error fetching technicians','fermer',{duration:3000})
    });
  }
  openAddDialog(){
    const dialogRef=
    this.dialog.open(AddTechnicianDialogComponent);
    dialogRef.afterClosed().subscribe(res=>{
      this.getAllTechnicians();
    }
   )


  }
  openModifyDialog(technician:Technician) {
    const dialogRef = this.dialog.open(MaterialDetailsDialogComponent,
      {width: '400px', maxHeight: '230px'});
    dialogRef.afterClosed().subscribe(res => {
      if (res === 'update') {
        this.openUpdateDialog(technician)
      } else if (res === 'delete') {
        this.deleteEquipement(technician.id);
        this.getAllTechnicians()
      }
    });
  }
    openUpdateDialog(technician: Technician) {
      const dialogRef = this.dialog.open(UpdateTechnicianDialogComponent, {
        width: '400px',
        data: technician
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.snackBar.open('Utilisateur mis à jour', 'Fermer', {
            duration: 3000,
            panelClass: ['green-snackbar']
          });
          this.getAllTechnicians();
        }
      });
    }
  deleteEquipement(id: number) {
    this.technicianService.deleteTechnician(id).subscribe(
      (response) => {
        this.snackBar.open('Technicien supprimé aves succes ','fermer',{duration:3000})
        this.getAllTechnicians();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }






    getStatusClass(inDuty: string): string {
      switch (inDuty.toLowerCase()) {
        case 'disponible':
          return 'status-disponible';
        case 'undisponible':
          return 'status-undisponible';
        default:
          return '';
      }
    }

}
