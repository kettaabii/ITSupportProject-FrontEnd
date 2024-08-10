import {StatusMat} from "../enums/status-mat.enum";
import {EquipementPanne} from "./equipement-panne";
import {User} from "./user";

export interface Equipement {
  materialId: number;
  materialName: string;
  status: StatusMat;
  panneMaterialList?: EquipementPanne[];
  utilisateur?: User;
}
