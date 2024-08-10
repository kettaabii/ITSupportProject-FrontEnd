import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from "../services/auth.service";

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  // Redirect to the login page
  return router.createUrlTree(['/login']);
};

export const adminGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated() && authService.currentUser()?.role === 'ADMIN') {
    return true;
  }

  // Redirect to an unauthorized page or dashboard
  return router.createUrlTree(['/unauthorized']);
};

export const technicianGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated() && authService.currentUser()?.role === 'TECHNICIAN') {
    return true;
  }

  // Redirect to an unauthorized page or dashboard
  return router.createUrlTree(['/unauthorized']);
};

export const userGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated() && authService.currentUser()?.role === 'USER') {
    return true;
  }

  // Redirect to an unauthorized page or dashboard
  return router.createUrlTree(['/unauthorized']);
};
