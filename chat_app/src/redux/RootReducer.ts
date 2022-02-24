import {combineReducers} from 'redux';
import {HomeReducer} from './home/reducer/HomeReducer';
import {LoginReducer} from './login/reducer/LoginReducer';
import {RegisterReducer} from './register/RegisterReducer';
import {RegisterRespond} from 'src/redux/register/RegisterAction';
const reducerList = {
  RegisterReducer,
};

export type RootStateType = {
  RegisterReducer: RegisterRespond;
};

export type ActionType = {
  type: string;
  data: Record<string, any>;
};

export const RootReducer = combineReducers(reducerList);
