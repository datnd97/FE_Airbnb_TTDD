import {Status} from './Status';
import {TypeHome} from './TypeHome';
import {TypeRoom} from './TypeRoom';

export class Home {
  id?: number;
  name?: string;
  address?: string;
  bedroom?: number;
  bathroom?: number;
  price?: number;
  typeHome?: TypeHome;
  typeRoom?: TypeRoom;
  description: string;
  status?: boolean;
}
