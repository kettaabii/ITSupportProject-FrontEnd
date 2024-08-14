import {Component, OnInit} from '@angular/core';
import {Equipement} from "../../Core/models/equipement";
import {EquipementService} from "../../Core/services/equipement.service";
import {MatCard, MatCardActions} from "@angular/material/card";
import {MatChip} from "@angular/material/chips";
import {NgClass, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {MaterialDetailsDialogComponent} from "../material-details-dialog/material-details-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-materials',
  standalone: true,
  imports: [
    MatCard,
    MatChip,
    NgClass,
    MatCardActions,
    MatButton,
    NgIf
  ],
  templateUrl: './all-materials.component.html',
  styleUrl: './all-materials.component.css'
})
export class AllMaterialsComponent implements OnInit {
  equipements:Equipement[]=[];
  constructor(private equipementService:EquipementService,private dialog: MatDialog,private router: Router) {
  }



  ngOnInit(): void {
    this.getAllEquipements();
  }
  getAllEquipements():void{
    this.equipementService.getAllEquipements().subscribe({
      next:(equipements)=>this.equipements=equipements,
      error:(err)=>console.error('Error fetching equipements',err)
    });
  }

  openModifyDialog(equipement: Equipement): void {

    const dialogRef=this.dialog.open(MaterialDetailsDialogComponent,
      {width: '400px',minHeight:'200px'});

  dialogRef.afterClosed().subscribe(result => {
  if (result === 'update') {
  this.router.navigate(['/update-equipement', equipement.materialId]);
} else if (result === 'delete') {
  this.deleteEquipement(equipement.materialId);
  this.getAllEquipements()
}
});}
  deleteEquipement(id: number) {
    this.equipementService.deleteEquipement(id).subscribe(
      (response) => {
        console.log('User deleted successfully:', response);
        this.getAllEquipements();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  openAssignerDialog(materialId:number){

  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'bon':
        return 'status-bon';
      case 'panne':
        return 'status-panne';
      case 'hors service':
        return 'status-hors-service';
      default:
        return '';
    }
  }
}
