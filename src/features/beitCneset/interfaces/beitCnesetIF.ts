import { Gabai } from '../../users/interfaces/usersIF';

export interface TfilaIF {
  tfila: string;
  time: string;
}

export interface BeitCnesetIF {
  name: string;
  address: string;
  URLaddress: string;
  community: string;
  image: string;
  gabai: Gabai;
  tfilot: TfilaIF[];
}
