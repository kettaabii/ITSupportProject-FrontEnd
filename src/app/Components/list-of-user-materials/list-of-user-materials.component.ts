import {Component, OnInit} from '@angular/core';
import {Equipement} from "../../Core/models/equipement";
import {EquipementService} from "../../Core/services/equipement.service";
import {AuthService} from "../../Core/services/auth.service";
import {MatButton} from "@angular/material/button";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {SignalerTicketComponent} from "../signaler-ticket-dialog/signaler-ticket.component";
import {PanneService} from "../../Core/services/panne.service";
import {StatusMat} from "../../Core/enums/status-mat.enum";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MatChip} from "@angular/material/chips";
import {TicketService} from "../../Core/services/ticket.service";
import {TicketHistoryDto} from "../../Core/dtos/ticket-history-dto.dto";
import {StatusTicketDialogComponent} from "../status-ticket-dialog/status-ticket-dialog.component";


@Component({
  selector: 'app-list-of-user-materials',
  standalone: true,
  imports: [
    MatButton,
    NgForOf,
    MatDialogModule,
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatList,
    MatListItem,
    MatChip,
    NgClass,
    MatCardTitle,
    MatCardImage,
    MatCardActions
  ],
  templateUrl: './list-of-user-materials.component.html',
  styleUrl: './list-of-user-materials.component.css'
})
export class ListOfUserMaterialsComponent implements OnInit {

  equipements: Equipement[] = [];
  user = () => this.authService?.currentUser();


  constructor(private equipementService: EquipementService,
              private authService: AuthService,
              private dialog: MatDialog,
              private panneservice: PanneService,
              private ticketService:TicketService) {
  }

  ngOnInit(): void {
    this.getMaterial();
  }


  getMaterial(): void {
    const idUser = this.user()?.id;
    if (idUser) {
      this.equipementService.getEquipementPerUser(idUser).subscribe({
        next: (equipements) => this.equipements = equipements,
        error: (err) => console.error('Error fetching Materials', err),
      });

    }

  }

  openDialog(idMat: number): void {
    const dialogRef = this.dialog.open(SignalerTicketComponent, {
      data: {idMat},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.signalerTicket(result.description, result.panneId, idMat);
      }
    });
  }

  signalerTicket(description: string, idPanne: number, idMat: number): void {
    const idUser = this.user()?.id;
    if (idUser) {
      this.panneservice.signaler(description, idMat, idPanne,idUser).subscribe({
        next: (response) => console.log('Ticket signaled successfully', response),
        error: (err) => console.error('Error signaling ticket', err),
      });
    }
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
  viewStatus(materialId:number){
    this.ticketService.getTicketHistoryForMat(materialId).subscribe({
      next:(ticketHistory:TicketHistoryDto[])=>{
        if(ticketHistory.length>0){
          const latestTicket=ticketHistory[ticketHistory.length-1];
          this.openStatusDialog(latestTicket);
        }else{
          console.log('no ticket available')
        }
      },
      error:(err)=>console.error('Error fetching ticket history',err)
    });
  }

  openStatusDialog(ticket:TicketHistoryDto):void{
    this.dialog.open(StatusTicketDialogComponent,{
      width:'400px',
      data:ticket
    });

  }

}
