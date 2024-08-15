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
import {User} from "../../Core/models/user";
import {UpdateUserDialogComponent} from "../update-user-dialog/update-user-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UpdateEquipementDialogComponent} from "../update-equipement-dialog/update-equipement-dialog.component";
import {AddNewEquipementComponent} from "../add-new-equipement/add-new-equipement.component";
import {
  AssignerEquipementUtilisateurDialogComponent
} from "../assigner-equipement-utilisateur-dialog/assigner-equipement-utilisateur-dialog.component";
import {TicketHistoryDto} from "../../Core/dtos/ticket-history-dto.dto";
import {TicketService} from "../../Core/services/ticket.service";
import {StatusTicketDialogComponent} from "../status-ticket-dialog/status-ticket-dialog.component";
import {
  HistoriquePannesForMatDialogComponent
} from "../historique-pannes-for-mat-dialog/historique-pannes-for-mat-dialog.component";

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
  equipements: Equipement[] = [];

  constructor(private equipementService: EquipementService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private ticketService: TicketService) {
  }


  ngOnInit(): void {
    this.getAllEquipements();
  }

  getAllEquipements(): void {
    this.equipementService.getAllEquipements().subscribe({
      next: (equipements) => this.equipements = equipements,
      error: (err) => console.error('Error fetching equipements', err)
    });
  }

  openModifyDialog(equipement: Equipement): void {

    const dialogRef = this.dialog.open(MaterialDetailsDialogComponent,
      {width: '400px', maxHeight: '230px'});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'update') {
        this.openUpdateDialog(equipement)
      } else if (result === 'delete') {
        this.deleteEquipement(equipement.materialId);
        this.getAllEquipements()
      }
    });
  }

  openUpdateDialog(equipement: Equipement) {
    const dialogRef = this.dialog.open(UpdateEquipementDialogComponent, {
      width: '400px',
      data: equipement
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Utilisateur mis à jour', 'Fermer', {
          duration: 3000,
          panelClass: ['green-snackbar']
        });
        this.getAllEquipements();
      }
    });
  }

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

  openAssignerDialog(equipement: Equipement) {
    const dialogRef = this.dialog.open(AssignerEquipementUtilisateurDialogComponent, {
      width: '400px',
      data: equipement
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllEquipements();

    });
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

  openAddDialog() {
    const dialogRef = this.dialog.open(AddNewEquipementComponent, {
      width: '500px',

    });
    dialogRef.afterClosed().subscribe(result => {
        this.getAllEquipements();
      }
    )
  };

  openPanneHistoryDialog(materialId:number) {
    this.ticketService.getTicketHistoryForMat(materialId).subscribe({
      next: (ticketHistory: TicketHistoryDto[]) => {
        if (ticketHistory.length > 0) {
          this.openStatusDialog(ticketHistory);
        } else {
          console.log('no history available')
        }
      },
      error: (err) => console.error('Error fetching ticket history', err)
    });

  }

  openStatusDialog(tickets: TicketHistoryDto[]): void {
    this.dialog.open(HistoriquePannesForMatDialogComponent, {
      width: '400px',
      data: tickets
    });
  }
}
