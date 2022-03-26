import axios from 'axios';
import { IUser } from '../interfaces/user';

const AUTH_API_URI = import.meta.env.VITE_AUTH_API;

const login = async () => {
  // fetch user
  const mockData: IUser = {
    firstName: 'Haris',
    lastName: 'Argyropoulos',
    email: 'harinioarg@gmail.com',
    password: 'harisarg7',
    role: 'admin',
  };
  return mockData;
};

export { login };
