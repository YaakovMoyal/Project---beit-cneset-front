import { Gabai } from "../../users/interfaces/usersIF";

interface Tfila {
  tfila: string;
  time: string;
}

export interface BeitCneset {
  name: string;
  address: string;
  community: string;
  image: string;
  gabai: Gabai;
  tfilot: Tfila[];
}
