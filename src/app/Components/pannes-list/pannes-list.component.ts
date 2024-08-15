import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Panne} from "../../Core/models/panne";
import {PanneService} from "../../Core/services/panne.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MaterialDetailsDialogComponent} from "../material-details-dialog/material-details-dialog.component";
import {Technician} from "../../Core/models/technician";
import {UpdateTechnicianDialogComponent} from "../update-technician-dialog/update-technician-dialog.component";

@Component({
  selector: 'app-pannes-list',
  standalone: true,
    imports: [
        DatePipe,
        MatButton,
        NgForOf
    ],
  templateUrl: './pannes-list.component.html',
  styleUrl: './pannes-list.component.css'
})
export class PannesListComponent implements OnInit{
listpannes:Panne[]=[];
constructor(private panneService:PanneService,private dialog:MatDialog,private snackBar:MatSnackBar) {
}

  ngOnInit(): void {
  this.loadPannes()
  }
  openDialog(panne:Panne){
    const dialogRef = this.dialog.open(MaterialDetailsDialogComponent,
      {width: '400px', maxHeight: '230px'});
    dialogRef.afterClosed().subscribe(res => {
      if (res === 'update') {
        this.openUpdateDialog(panne)
      } else if (res === 'delete') {
        this.deletePanne(panne.panneId);
        this.loadPannes()
      }
    });


  }

  openUpdateDialog(panne: Panne) {
    const dialogRef = this.dialog.open(UpdateTechnicianDialogComponent, {
      width: '400px',
      data: panne
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Panne Mise à jour', 'Fermer', {
          duration: 3000,
          panelClass: ['green-snackbar']
        });
        this.loadPannes();
      }
    });
  }

  deletePanne(id: number) {
    this.panneService.deletePanne(id).subscribe(
      (response) => {
        this.snackBar.open('Panne supprimée aves succes ','fermer',{duration:3000})
        this.loadPannes();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  openAddDialog(){}


  loadPannes(){
  this.panneService.getAllPannes().subscribe({
    next:(pannes)=>this.listpannes=pannes,
    error:(err)=>{
      console.error('Error loading pannes:', err);
    }
  }
    )
  }

}
