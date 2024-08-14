import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../Core/models/user";
import {UserService} from "../../Core/services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {UserDetailsDialogComponent} from "../user-details-dialog-component/user-details-dialog-component.component";
import {NgForOf} from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-list-of-users',
  standalone: true,
  imports: [
    NgForOf,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatPaginator,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    MatButton
  ],
  templateUrl: './list-of-users.component.html',
  styleUrl: './list-of-users.component.css'
})
export class ListOfUsersComponent implements OnInit,  AfterViewInit{

  displayedColumns: string[] = ['userName', 'email', 'Action'];
  dataSource :MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.dataSource=new MatTableDataSource<User>([]);
  }

  ngOnInit() {
    this.loadUsers();
  }

  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
  }

  loadUsers() {
    this.userService.allusers().subscribe({
     next: (data) => {
       if (this.dataSource) {
         this.dataSource.data = data;
       } else {
         console.error('dataSource is not initialized.');
       }},
      error:(err)=>{
     console.error('error fetching users')}
      });
  }

  openUserDetails(user: User) {
    const dialogRef = this.dialog.open(UserDetailsDialogComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'update') {
        this.router.navigate(['/update-user', user.id]);
      } else if (result === 'delete') {
        this.deleteUser(user.id);
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (response) => {
        console.log('User deleted successfully:', response);
        this.loadUsers(); // Reload the user list after deletion
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
