import { Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {LoginComponent} from "./Components/login/login.component";
import {AdminComponent} from "./Components/admin/admin.component";
import {TechnicianComponent} from "./Components/technician/technician.component";
import {UserComponent} from "./Components/user/user.component";
import {UnautorizedComponent} from "./Components/unautorized/unautorized.component";
import {adminGuard, technicianGuard, userGuard} from "./Core/Guard/auth.guard";
import {PendingTicketsComponent} from "./Components/pending-tickets/pending-tickets.component";
import {SignalerTicketComponent} from "./Components/signaler-ticket-dialog/signaler-ticket.component";
import {ListOfUserMaterialsComponent} from "./Components/list-of-user-materials/list-of-user-materials.component";
import {AddUserFormComponent} from "./Components/add-user-form/add-user-form.component";
import {ListOfUsersComponent} from "./Components/list-of-users/list-of-users.component";
import {AllMaterialsComponent} from "./Components/all-materials/all-materials.component";
import {UtilisateursWrapperComponent} from "./Components/utilisateurs-wrapper/utilisateurs-wrapper.component";
import {AddNewEquipementComponent} from "./Components/add-new-equipement/add-new-equipement.component";
import {AllTechniciansComponent} from "./Components/all-technicians/all-technicians.component";
import {AddNewTechnicianComponent} from "./Components/add-new-technician/add-new-technician.component";
import {PannesListComponent} from "./Components/pannes-list/pannes-list.component";

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
        path :"",
        component:PendingTicketsComponent,
        canActivate:[adminGuard]
      },
      {
        path :"listOfUsers",
        component:UtilisateursWrapperComponent,
        canActivate:[adminGuard],
        children :[
          {
            path :"",
            component:AddUserFormComponent,
            canActivate:[adminGuard]
          }


        ]
      },
      {
        path :"materials",
        component:AllMaterialsComponent,
        canActivate:[adminGuard]
      },
      {
        path :"NewEquipement",
        component:AddNewEquipementComponent,
        canActivate:[adminGuard]
      },
      {
        path :"technicians",
        component:AllTechniciansComponent,
        canActivate:[adminGuard]
      },
      {
        path :"NewTechnician",
        component:AddNewTechnicianComponent,
        canActivate:[adminGuard]
      },
      {
        path :"pannes",
        component:PannesListComponent,
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
        component:ListOfUserMaterialsComponent,

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
