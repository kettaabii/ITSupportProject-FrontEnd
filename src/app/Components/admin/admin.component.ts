import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../Shared/sidebar/sidebar.component";
import {NavbarComponent} from "../Shared/navbar/navbar.component";
import {ListOfUserMaterialsComponent} from "../list-of-user-materials/list-of-user-materials.component";
import {AddUserFormComponent} from "../add-user-form/add-user-form.component";
import {MatFormField} from "@angular/material/form-field";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {ListOfUsersComponent} from "../list-of-users/list-of-users.component";
import {AddNewEquipementComponent} from "../add-new-equipement/add-new-equipement.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent,
    ListOfUserMaterialsComponent,
    AddUserFormComponent,
    MatFormField,
    MatIconButton,
    MatInput,
    MatIcon,
    ListOfUsersComponent,
    AddNewEquipementComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    this.router.navigateByUrl('/admin-dashboard');

  }



}
