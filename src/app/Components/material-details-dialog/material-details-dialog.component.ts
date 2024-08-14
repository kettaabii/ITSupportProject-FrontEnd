import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {User} from "../../Core/models/user";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-material-details-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatDialogTitle,
    MatDialogActions
  ],
  templateUrl: './material-details-dialog.component.html',
  styleUrl: './material-details-dialog.component.css'
})
export class MaterialDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MaterialDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {}

  update() {
    this.dialogRef.close('update');
  }

  delete() {
    this.dialogRef.close('delete');
  }


}
