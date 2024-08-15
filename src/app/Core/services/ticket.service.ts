import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../models/ticket";
import {TicketHistoryDto} from "../dtos/ticket-history-dto.dto";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl='http://localhost:8088';

  constructor(private http:HttpClient) { }

  assignTicketToTechnician(idTicket:number ,idTechnician:number):Observable<void>{
    return this.http.put<void>(`${this.baseUrl}/admin/AssignTicket/${idTicket}/ToTechnician/${idTechnician}`,null);
  }

  getTicketsByTec(id:number):Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${this.baseUrl}/technician/getTicketsByTec/${id}`);
  }

  getAssignedTickets(id:number):Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${this.baseUrl}/technician/AssignedTickets/${id}`);
  }

  getTicketHistoryForMat(id:number):Observable<TicketHistoryDto[]>{
    return this.http.get<TicketHistoryDto[]>(`${this.baseUrl}/shared/TicketsHistoryForMat/${id}`);
  }

  acceptTicket(id:number):Observable<string>{
    return this.http.put(`${this.baseUrl}/technician/AcceptTicket/${id}`,null,{responseType:'text'});
  }

  getMyTickets(id:number):Observable<TicketHistoryDto[]>{
    return this.http.get<TicketHistoryDto[]>(`${this.baseUrl}/user/MyTickets/${id}`);
  }
  getPendingTickets():Observable<TicketHistoryDto[]>{
    return this.http.get<TicketHistoryDto[]>(`${this.baseUrl}/admin/getPendingTickets`)
  }
}
