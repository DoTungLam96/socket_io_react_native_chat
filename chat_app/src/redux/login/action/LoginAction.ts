import {ActionType} from '../../RootReducer';
import * as Actions from './ActionKey';
export const Login = (dataLogin: any): ActionType => {
  return {
    type: Actions.LOGIN,
    data: {dataLogin},
  };
};
