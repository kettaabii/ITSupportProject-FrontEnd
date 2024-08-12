import {StatusTicket} from "../enums/status-ticket.enum";

export interface TicketHistoryDto {
  id:number;
  dateSignalement: Date;
  panneTitre: string;
  panneDescription: string;
  statusTicket: StatusTicket;

}
