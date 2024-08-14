import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../Core/models/user";

@Component({
  selector: 'app-user-details-dialog-component',
  standalone: true,
  imports: [],
  templateUrl: './user-details-dialog-component.component.html',
  styleUrl: './user-details-dialog-component.component.css'
})
export class UserDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UserDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {}

  update() {
    this.dialogRef.close('update');
  }

  delete() {
    this.dialogRef.close('delete');
  }

  close() {
    this.dialogRef.close();
  }

}
