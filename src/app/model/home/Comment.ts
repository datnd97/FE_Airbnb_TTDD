import {User} from '../user/user';
import {Home} from './Home';

export interface Comment {
  id: number;
  content: string;
  home?: Home;
  idHome?: number;
  user?: any;
}
