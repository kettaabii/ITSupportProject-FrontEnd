import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {SidebarComponent} from "./Components/Shared/sidebar/sidebar.component";
import {NavbarComponent} from "./Components/Shared/navbar/navbar.component";
import {SignalerTicketComponent} from "./Components/signaler-ticket-dialog/signaler-ticket.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SidebarComponent, NavbarComponent, SignalerTicketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ITSupport-Front';
}
