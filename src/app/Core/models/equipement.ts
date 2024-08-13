import {StatusMat} from "../enums/status-mat.enum";
import {EquipementPanne} from "./equipement-panne";
import {User} from "./user";

export interface Equipement {
  materialId: number;
  materialName: string;
  status: StatusMat;
  picture:string;
  panneMaterialList?: EquipementPanne[];
  utilisateur?: User;
}
