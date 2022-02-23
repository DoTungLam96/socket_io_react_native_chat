import {io} from 'socket.io-client';
import {BASE_URL} from 'src/services/ApiServices';
import HomeApi from 'src/services/HomeApi/HomeApi';
import LoginAPI from 'src/services/LoginApi/LoginApi';
import {JoinChatroom, LoadMessage} from '../action/HomeAction';

const socket = io(`${BASE_URL}`, {forceNew: true});
socket.on('connection', () => console.log('Connected !!!!!'));

export const LoadMessageDispatch =
  (token: string, message: string) => async dispatch => {
    const loginAPI = new LoginAPI();

    socket.emit('getMessage');
    loginAPI
      .login({
        email: token,
        password: message,
        token: '',
      })
      .then(data => {
        dispatch(LoadMessage(data?.data?.token, data?.data?.message));
      });
  };

export const JoinChatRoomDispatch =
  (name: any, room: any) => async dispatch => {
    const currentUser = name.trim().toLowerCase();

    socket.emit('join', {name, room}, err => {
      console.log('JoinChatRoomDispatch', err);
    });

    socket.on('message', message => {
      if (currentUser !== message[0]?.chatUser) {
        dispatch(JoinChatroom(name, room));
      }
      const {msg, type} = message[0];
      if (type !== 'bot' && msg !== '') {
        const homeApi = new HomeApi();
        homeApi.joinChatRoom({}).then(data => {
          dispatch(JoinChatroom(name, data));
        });
      }
    });
  };

export const sendMessageDispatch =
  ({name, msg, date, room}) =>
  async dispatch => {
    socket.emit('sendMessage', {name, msg, date, room}, callback => {});
  };

export const disconnectChatRoom = () => {
  socket.emit('disconnect', () => {});
};
