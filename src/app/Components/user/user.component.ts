import { Component } from '@angular/core';
import {NavbarComponent} from "../Shared/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../Shared/sidebar/sidebar.component";
import {MatBadge} from "@angular/material/badge";
import {SignalerTicketComponent} from "../signaler-ticket/signaler-ticket.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    SidebarComponent,
    MatBadge,
    SignalerTicketComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
