import { Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {LoginComponent} from "./Components/login/login.component";

export const routes: Routes = [
  {
    path : "dashboard",
    component : TestComponent
  },
  {
    path:"",
    component:LoginComponent
  }
];
