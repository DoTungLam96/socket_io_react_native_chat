import {ActionType} from '../RootReducer';
import * as Actions from './actionKey';
import {RegisterRespond} from './RegisterAction';

const initState: RegisterRespond = {
  token: '',
  id: undefined,
  email: '',
  name: '',
};

const RegisterReducer = (
  state = initState,
  action: ActionType,
): RegisterRespond => {
  switch (action.type) {
    case Actions.REGISTER_DATA: {
      console.log('register_reducer', action.data);
      return {
        ...state,
        token: action.data?.registerRespond.token,
        id: action.data?.registerRespond?.id,
        name: action.data?.registerRespond?.name,
        email: action.data?.registerRespond?.email,
      };
    }
    default:
      return initState;
  }
};

export {RegisterReducer};
