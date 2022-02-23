import LoginAPI from 'src/services/LoginApi/LoginApi';
import {Login} from '../action/LoginAction';

export const loginDispatch =
  (username: string, password: string) => async dispatch => {
    const loginAPI = new LoginAPI();
    loginAPI
      .login({
        email: username,
        password: password,
      })
      .then(data => {
        dispatch(Login(data));
      })
      .catch(ex => {
        console.log(ex);
      });
  };
