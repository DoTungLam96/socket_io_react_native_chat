import ApiService, {BASE_URL} from '../ApiServices';
import {v1} from './endpoints';

export type LoginBody = {
  email?: string;
  password?: string;
  token?: string;
};

export default class LoginAPI extends ApiService {
  constructor() {
    super(BASE_URL);
  }

  login = (body: LoginBody): Promise<Record<string, any> | null> => {
    return this.POST<LoginBody, Record<string, any>>(
      v1.login,
      body,
      {},
      body?.token,
    );
  };
}
