import { Role } from '../types/user';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}
