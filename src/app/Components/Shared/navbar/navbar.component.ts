import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatBadge} from "@angular/material/badge";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIcon,
    MatBadge
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
