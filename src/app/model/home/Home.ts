import {TypeHome} from './TypeHome';
import {TypeRoom} from './TypeRoom';
import {User} from '../user/user';

export class Home {
  id?: number;
  name?: string;
  // picture?:string;
  address?: string;
  bedroom?: number;
  bathroom?: number;
  price?: number;
  typeHome?: TypeHome;
  typeRoom?: TypeRoom;
  description?: string;
  status?: boolean;
  user: User;
  isBooking?: boolean;
}
