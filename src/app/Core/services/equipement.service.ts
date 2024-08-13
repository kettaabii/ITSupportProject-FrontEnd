import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement} from "../models/equipement";

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) {}

  addNewEquipement(equipement: Equipement): Observable<Equipement> {
    return this.http.post<Equipement>(`${this.baseUrl}/admin/AddNewEquipement`, equipement);
  }

  updateEquipement(id: number, equipement: Equipement): Observable<Equipement> {
    return this.http.put<Equipement>(`${this.baseUrl}/admin/updateEquipement/${id}`, equipement);
  }

  deleteEquipement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/deleteEquipement/${id}`);
  }

  getAllEquipements(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.baseUrl}/admin/listEquipements`);
  }

  assignEquipementToUser(idMat: number, idUser: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/AssignEquipement${idMat}/ToUser/${idUser}`, {});
  }

  getEquipementPerUser(id: number): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.baseUrl}/shared/equipementPerUser/${id}`);
  }

  getEquipmentById(id: number): Observable<Equipement> {
    return this.http.get<Equipement>(`${this.baseUrl}/admin/getEquipmentById/${id}`);
  }
}
