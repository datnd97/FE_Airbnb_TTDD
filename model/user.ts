import {Role} from './role';
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
  roles?: [Role];
}
