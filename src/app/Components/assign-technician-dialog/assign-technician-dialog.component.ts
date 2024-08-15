import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {TechnicianService} from '../../Core/services/technician.service';
import {Technician} from '../../Core/models/technician';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-assign-technician-dialog',
  standalone: true,
  templateUrl: './assign-technician-dialog.component.html',
  styleUrls: ['./assign-technician-dialog.component.css'],
  imports: [
    MatRadioGroup,
    FormsModule,
    MatRadioButton,
    NgForOf,
    MatButton,
    MatDialogTitle,
    MatDialogActions,
    MatOption,
    MatSelect
  ]
})
export class AssignTechnicianDialogComponent implements OnInit {
  technicians: Technician[] = [];
  selectedTechnician: Technician | null = null;

  constructor(
    private dialogRef: MatDialogRef<AssignTechnicianDialogComponent>,
    private technicianService: TechnicianService,
    @Inject(MAT_DIALOG_DATA) public data: { idTicket: number }
  ) {}

  ngOnInit(): void {
    this.technicianService.getAvailableTechnicians().subscribe({
      next: (techs) => (this.technicians = techs),
      error: (err) => console.error('Error fetching technicians', err),
    });
  }

  assignTechnician(): void {
    if (this.selectedTechnician) {
      this.dialogRef.close(this.selectedTechnician.id);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
