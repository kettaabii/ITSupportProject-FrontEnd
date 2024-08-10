import {Person} from "../models/person";

export interface LoginResponse {
  token:string
  user:Person
}
