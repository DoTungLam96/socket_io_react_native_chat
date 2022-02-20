import {User} from '../../../model/Login';
import {ActionType} from '../../../redux/RootReducer';
import * as Actions from '../action/ActionKey';

const initState: User = {
  name: '',
  password: '',
  username: '',
};

const LoginReducer = (state = initState, action: ActionType): User => {
  switch (action.type) {
    case Actions.Login: {
      return {
        ...state,
        name: action?.data?.name,
        password: action?.data?.password,
        username: action?.data?.username,
      };
    }

    default:
      return initState;
  }
};

export {LoginReducer};
