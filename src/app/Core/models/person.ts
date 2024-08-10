import {Role} from "../enums/role.enum";

export interface Person {
  id: number;
  username: string;
  password: string;
  email: string;
  phone: string;
  role: Role;
}
