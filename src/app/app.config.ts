import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./Core/interceptor/auth.interceptor";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideHttpClient(withInterceptors([authInterceptor])), provideAnimationsAsync()]}


bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserAnimationsModule),
      importProvidersFrom(MatDialogModule),

    ]
});
