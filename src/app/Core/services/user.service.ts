import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignupRequest} from "../dtos/signup-request.dto";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl='http://localhost:8088'

  constructor(private http:HttpClient) { }

  newUser(user:SignupRequest): Observable<string>{
    return this.http.post(`${this.baseUrl}/admin/newUser`,user,{responseType:'text'});
  }

  updateUser(id:number,user:SignupRequest):Observable<string>{
    return this.http.put(`${this.baseUrl}/admin/updateUser/${id}`,user,{responseType:'text'});
  }

  deleteUser(id:number):Observable<string>{
    return this.http.delete(`${this.baseUrl}/admin/deleteUser/${id}`,{responseType:'text'});
  }

  allusers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/admin/AllUsers`);
  }
}
