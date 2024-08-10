import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panne} from "../models/panne";
import { PanneEquipementKey} from "../models/panne-equipement-key";

@Injectable({
  providedIn: 'root'
})
export class PanneService {
 private baseUrl='http://localhost:8088'
  constructor(private http:HttpClient) { }

  signaler(description: string, idMat: number, idPanne: number, idUser: number): Observable<string> {
   const params ={description,idMat,idPanne}
    return this.http.post(`${this.baseUrl}/user/signaler/${idUser}`,null,{params,responseType:'text'});
  }

  newPanne(panne:Panne) : Observable<Panne> {
   return this.http.post<Panne>(`${this.baseUrl}/admin/newPanne`,panne);
  }

  setAsCommunePanne(panne:PanneEquipementKey):Observable<Panne>{
   return this.http.post<Panne>(`${this.baseUrl}/admin/setAsCommunePanne`,panne);
  }

  updatePanne (id:number,panne:Panne):Observable<string> {
   return this.http.put(`${this.baseUrl}/admin/updatePanne/${id}`,panne , {responseType:'text'});
  }

  getAllPannes() :Observable<Panne[]>{
   return this.http.get<Panne[]>(`${this.baseUrl}/admin/allPanne`);
  }

}
