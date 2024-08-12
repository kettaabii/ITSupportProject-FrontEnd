import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../Shared/sidebar/sidebar.component";
import {NavbarComponent} from "../Shared/navbar/navbar.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/admin-dashboard/pending-tickets');

  }



}
