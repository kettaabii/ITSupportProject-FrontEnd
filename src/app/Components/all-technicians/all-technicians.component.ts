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
  openModifyDialog(technician:Technician){}


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
