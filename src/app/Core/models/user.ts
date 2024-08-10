import {Person} from "./person";
import {Ticket} from "./ticket";
import {Equipement} from "./equipement";

export interface User extends Person{
  tickets?: Ticket[];
  equipements?: Equipement[];
}
