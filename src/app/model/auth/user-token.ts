import {Role} from './role';

export interface UserToken {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  roles?: [Role];
  token?: string;
}
