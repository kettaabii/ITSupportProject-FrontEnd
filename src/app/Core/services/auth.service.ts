import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {LoginRequest} from "../dtos/login-request.dto";
import { LoginResponse} from "../dtos/login-response.dto";
import { SignupRequest} from "../dtos/signup-request.dto";
import { Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8088';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';

  private _currentUser = signal<Person | null>(null);
  isAuthenticated = computed(() => !!this._currentUser());

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }

  get currentUser() {
    return this._currentUser.asReadonly();
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/public/login`, loginRequest).pipe(
      tap(response => {
        this.setSession(response);
      })
    );
  }

  signup(signupRequest: SignupRequest): Observable<void> {
    return this.http.post<void>(`${this.API_URL}/public/signup`, signupRequest);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this._currentUser.set(null);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setSession(authResult: LoginResponse) {
    localStorage.setItem(this.TOKEN_KEY, authResult.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(authResult.user));
    this._currentUser.set(authResult.user);
  }

  private loadUserFromStorage() {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        this._currentUser.set(user);
      } catch (e) {
        console.error('Error parsing stored user data', e);
        this.logout();
      }
    }
  }
}
