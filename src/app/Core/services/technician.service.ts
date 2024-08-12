import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SignupRequest} from "../dtos/signup-request.dto";
import {Technician} from "../models/technician";

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  private baseUrl ='http://localhost:8088'

  constructor(private http:HttpClient) { }

  newTechnician(technician:SignupRequest) : Observable<string>{
    return this.http.post(`${this.baseUrl}/admin/newTechnician`,technician,{responseType:'text'});
  }

  updateTechnician(id:number ,technician:SignupRequest): Observable<any>{
    return this.http.put(`${this.baseUrl}/admin/updateTechnician/${id}`,technician);
  }

  deleteTechnician(id:number):Observable<string>{
    return this.http.delete(`${this.baseUrl}/admin/deleteTechnician/${id}`, {responseType:'text'});
  }

  getAvailableTechnicians():Observable<Technician[]>{
    return this.http.get<Technician[]>(`${this.baseUrl}/admin/AvailableTechnicians`);
  }
}
