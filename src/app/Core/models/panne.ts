import {TypePanne} from "../enums/type-panne.enum";
import {EquipementPanne} from "./equipement-panne";

export interface Panne {
  panneId: number;
  panneTitle: string;
  panneDescription: string;
  typePanne: TypePanne;
  listePanneEquipement?: EquipementPanne[];
}
