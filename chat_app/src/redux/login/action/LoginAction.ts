import {User} from '../../../model/Login';
import {ActionType} from '../../RootReducer';
import * as Actions from './ActionKey';
export const Login = (user: User): ActionType => {
  return {
    type: Actions.Login,
    data: {user},
  };
};
