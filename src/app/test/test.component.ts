import {Component} from '@angular/core';
import {AuthService} from "../Core/services/auth.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  {
  user = () => this.authService?.currentUser();
  isLoggedIn = () => this.authService?.isAuthenticated() ?? false;

  constructor(private authService: AuthService) {}




}
