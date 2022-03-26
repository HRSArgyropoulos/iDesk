import userActionTypes from './types';
import { IUser } from '../../../interfaces/user';

const { SIGN_IN, SIGN_OUT } = userActionTypes;

const login = (user: IUser) => ({
  type: SIGN_IN,
  payload: user,
});

const logout = () => ({
  type: SIGN_OUT,
});

export { login, logout };
