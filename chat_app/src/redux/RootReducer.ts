import {combineReducers} from 'redux';
import {HomeReducer} from './home/reducer/HomeReducer';
import {LoginReducer} from './login/reducer/LoginReducer';

const reducerList = {
  LoginReducer: LoginReducer,
  HomeReducer: HomeReducer,
};

export type ActionType = {
  type: string;
  data: Record<string, any>;
};

export const RootReducer = combineReducers(reducerList);
