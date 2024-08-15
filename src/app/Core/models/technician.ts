import {Ticket} from "./ticket";
import {Person} from "./person";
import {InDuty} from "../enums/in-duty";

export interface Technician extends Person{
  inDuty:InDuty;
  tickets?: Ticket[];
}
