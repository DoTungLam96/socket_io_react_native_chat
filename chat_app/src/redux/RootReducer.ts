import {combineReducers} from 'redux';
import {LoginReducer} from './login/reducer/LoginReducer';

const reducerList = {
  LoginReducer: LoginReducer,
};

export type ActionType = {
  type: string;
  data: Record<string, any>;
};

export const RootReducer = combineReducers(reducerList);
