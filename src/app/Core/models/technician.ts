import {Ticket} from "./ticket";
import {Person} from "./person";

export interface Technician extends Person{
  tickets?: Ticket[];
}
