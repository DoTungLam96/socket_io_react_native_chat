import {ActionType} from 'src/redux/RootReducer';
import * as Actions from 'src/redux/home/action/ActionKey';

export const LoadMessage = (token: string, message: string): ActionType => {
  return {
    data: {
      token: token,
      message: message,
    },
    type: Actions.LOAD_MESSAGE,
  };
};

export const JoinChatroom = (name: any, room: any): ActionType => {
  return {
    data: {
      name: name,
      room: room,
    },
    type: Actions.JOIN_ROOM,
  };
};

export const SendMessage = (
  name: any,
  msg: any,
  date: any,
  room: any,
  token: any,
): ActionType => {
  return {
    data: {
      name: name,
      room: room,
      msg: msg,
      date: date,
      token: token,
    },
    type: Actions.SEND_MESSAGE,
  };
};
