import * as Actions from 'src/redux/register/actionKey';
import {ActionType} from '../RootReducer';

export type RegisterRespond = {
  id?: number;
  name?: string;
  email?: string;
  token?: string;
};

export const RegisterAction = (
  registerRespond: RegisterRespond,
): ActionType => {
  return {
    type: Actions.REGISTER_DATA,
    data: {
      registerRespond,
    },
  };
};
