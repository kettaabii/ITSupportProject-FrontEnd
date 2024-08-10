import { Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {LoginComponent} from "./Components/login/login.component";
import {AdminComponent} from "./Components/admin/admin.component";
import {TechnicianComponent} from "./Components/technician/technician.component";
import {UserComponent} from "./Components/user/user.component";
import {UnautorizedComponent} from "./Components/unautorized/unautorized.component";
import {adminGuard, technicianGuard, userGuard} from "./Core/Guard/auth.guard";

export const routes: Routes = [
  {
    path : "dashboard",
    component : TestComponent
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"admin-dashboard",
    component:AdminComponent,
    canActivate:[adminGuard]
  },
  {
    path:"technician-dashboard",
    component:TechnicianComponent,
    canActivate:[technicianGuard]

  },
  {
    path:"user-dashboard",
    component:UserComponent,
    canActivate:[userGuard]
  },
  {
    path:"unauthorized",
    component:UnautorizedComponent
  }


];
