import {StatusTicket} from "../enums/status-ticket.enum";
import {User} from "./user";
import {Technician} from "./technician";
import {EquipementPanne} from "./equipement-panne";

export class Ticket {
  id: number;
  statusTicket: StatusTicket;
  dateCreation: Date;
  dateReception: Date;
  dateCloture: Date;
  priorite: number;
  user?: User;
  technician?: Technician;
  equipementPanne?: EquipementPanne;
}
