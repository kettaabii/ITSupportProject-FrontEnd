import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TicketService} from '../../Core/services/ticket.service';
import {AssignTechnicianDialogComponent} from '../assign-technician-dialog/assign-technician-dialog.component';
import {DatePipe, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {TicketHistoryDto} from "../../Core/dtos/ticket-history-dto.dto";
import {MatSnackBar} from "@angular/material/snack-bar";




@Component({
  selector: 'app-pending-tickets',
  standalone: true,
  templateUrl: './pending-tickets.component.html',
  imports: [
    NgForOf,
    MatButton,
    DatePipe
  ],
  styleUrls: ['./pending-tickets.component.css']
})
export class PendingTicketsComponent implements OnInit{
  pendingTickets:TicketHistoryDto[]=[];


  constructor(private ticketService: TicketService, private dialog: MatDialog,private snackBar:MatSnackBar) {}

  openDialog(idTicket: number): void {
    const dialogRef = this.dialog.open(AssignTechnicianDialogComponent, {
      data: { idTicket },
    });

    dialogRef.afterClosed().subscribe((idTechnician: number | undefined) => {
      if (idTechnician !== undefined) {
        this.ticketService.assignTicketToTechnician(idTicket, idTechnician).subscribe({
          next: () =>{this.ngOnInit();
          this.snackBar.open('ticket Assigné avec succes','fermer',{duration:3000})},
          error: (error) => {
            console.error('Error assigning technician', error);
          },
        });
      }else{
        this.snackBar.open('there is an error','fermer')
      }
    });
  }

  loadPendingTickets(): void {
    this.ticketService.getPendingTickets().subscribe({
      next: (tickets) => {
        console.log('pending Tickets here')
        this.pendingTickets = tickets;
      },
      error: (error) => {
        console.error('Error loading pending tickets:', error);
      },
    });
  }

  ngOnInit(): void {
    this.loadPendingTickets()
  }
}
