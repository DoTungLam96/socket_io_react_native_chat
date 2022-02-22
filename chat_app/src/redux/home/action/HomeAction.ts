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

export const JoinChatroom = (roomId: string, room: any): ActionType => {
  return {
    data: {
      roomId: roomId,
      room: room,
    },
    type: Actions.JOIN_ROOM,
  };
};
