import {ToastAndroid} from 'react-native';
import NavigationService from 'src/navigationRoute/component/NavigationServices';
import RegisterApi from 'src/services/RegisterApi/RegisterApi';
import {RegisterAction} from './RegisterAction';

export const RegisterThunk =
  (email: any, password: any, name: any, cpassword: any) => async dispatch => {
    const apiRegister = new RegisterApi();
    apiRegister
      .register({
        email,
        password,
        name,
        cpassword,
      })
      .then(data => {
        if (data?.msg !== undefined) {
          ToastAndroid.show(`${data?.msg}`, ToastAndroid.SHORT);
        } else {
          dispatch(
            RegisterAction({
              token: data?.token,
              email: data?.user?.email,
              id: data?.user?.id,
              name: data?.user?.name,
            }),
          );
            NavigationService.navigate('Login', undefined);
        }
      })
      .catch(err => console.log('err', err));
  };
