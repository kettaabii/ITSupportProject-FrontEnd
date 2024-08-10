import {Equipement} from "./equipement";
import {Panne} from "./panne";
import {PanneEquipementKey} from "./panne-equipement-key";

export interface EquipementPanne {
  id: PanneEquipementKey;
  equipement: Equipement;
  panne: Panne;
}
