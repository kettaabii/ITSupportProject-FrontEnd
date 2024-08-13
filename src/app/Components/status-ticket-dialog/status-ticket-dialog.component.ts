import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {TicketHistoryDto} from "../../Core/dtos/ticket-history-dto.dto";

@Component({
  selector: 'app-status-ticket-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    DatePipe,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './status-ticket-dialog.component.html',
  styleUrl: './status-ticket-dialog.component.css'
})
export class StatusTicketDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<StatusTicketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TicketHistoryDto
  ) {}
}
