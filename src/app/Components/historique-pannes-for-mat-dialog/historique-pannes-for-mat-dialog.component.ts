import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TicketHistoryDto} from "../../Core/dtos/ticket-history-dto.dto";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-historique-pannes-for-mat-dialog',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './historique-pannes-for-mat-dialog.component.html',
  styleUrl: './historique-pannes-for-mat-dialog.component.css'
})
export class HistoriquePannesForMatDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<HistoriquePannesForMatDialogComponent>,
    @Inject(MAT_DIALOG_DATA)  public tickets: TicketHistoryDto[]
  ) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

}
