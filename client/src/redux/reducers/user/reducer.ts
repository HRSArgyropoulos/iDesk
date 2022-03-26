import { AnyAction } from 'redux';
import { user } from '../../../models/user';
import { IUser } from '../../../interfaces/user';
import userActionTypes from './types';

interface IInitalState {
  signedIn: boolean;
  accessToken: string;
  user: IUser;
}

const initialState: IInitalState = {
  signedIn: false,
  accessToken: '',
  user,
};

const { SIGN_IN, SIGN_OUT } = userActionTypes;

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signedIn: true, user: action.payload };
    case SIGN_OUT:
      return { ...state, signedIn: false, user };
    default:
      return state;
  }
};

export default userReducer;
