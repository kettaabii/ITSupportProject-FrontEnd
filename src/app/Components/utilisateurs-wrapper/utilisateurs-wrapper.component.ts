import { Component } from '@angular/core';
import {ListOfUsersComponent} from "../list-of-users/list-of-users.component";
import {AddUserFormComponent} from "../add-user-form/add-user-form.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-utilisateurs-wrapper',
  standalone: true,
  imports: [
    ListOfUsersComponent,
    AddUserFormComponent,
    RouterOutlet
  ],
  templateUrl: './utilisateurs-wrapper.component.html',
  styleUrl: './utilisateurs-wrapper.component.css'
})
export class UtilisateursWrapperComponent {

}
