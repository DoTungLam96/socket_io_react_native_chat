import * as Actions from 'src/redux/home/action/ActionKey';
import {ActionType} from 'src/redux/RootReducer';

export type HomeModel = {
  id?: string;
  name?: string;
  token?: string;
  message?: string;
  error?: string;
  roomId?: string;
  room?: any;
};

const initState: HomeModel = {
  id: undefined,
  name: '',
  token: '',
  message: '',
  error: '',
};

const HomeReducer = (state = initState, action: ActionType): HomeModel => {
  switch (action.type) {
    case Actions.LOAD_MESSAGE: {
      return {
        ...state,
        message: action.data?.message,
      };
    }

    case Actions.JOIN_ROOM: {
      return {
        ...state,
        room: action?.data?.room,
      };
    }
    default:
      return initState;
  }
};

export {HomeReducer};
