import { Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {LoginComponent} from "./Components/login/login.component";
import {AdminComponent} from "./Components/admin/admin.component";
import {TechnicianComponent} from "./Components/technician/technician.component";
import {UserComponent} from "./Components/user/user.component";
import {UnautorizedComponent} from "./Components/unautorized/unautorized.component";
import {adminGuard, technicianGuard, userGuard} from "./Core/Guard/auth.guard";
import {PendingTicketsComponent} from "./Components/pending-tickets/pending-tickets.component";
import {SignalerTicketComponent} from "./Components/signaler-ticket/signaler-ticket.component";

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
    canActivate:[adminGuard],
    children :[
      {
        path :"pending-tickets",
        component:PendingTicketsComponent,
        canActivate:[adminGuard]
      }
    ]
  },
  {
    path:"technician-dashboard",
    component:TechnicianComponent,
    canActivate:[technicianGuard]

  },
  {
    path:"user-dashboard",
    component:UserComponent,
    canActivate:[userGuard],
    children :[
      {
        path :"",
        component:SignalerTicketComponent,
        canActivate:[userGuard]
      }
    ]
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
