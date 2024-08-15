import {StatusTicket} from "../enums/status-ticket.enum";
import {TypePanne} from "../enums/type-panne.enum";

export interface TicketHistoryDto {
  id:number;
  dateSignalement: Date;
  panneTitre: string;
  panneDescription: string;
  statusTicket: StatusTicket;

}
