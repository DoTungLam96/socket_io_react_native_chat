import ApiService from '../ApiServices';
import {v1} from './endpoints';

export type LoginBody = {
  email: string;
  password: string;
};

export default class LoginAPI extends ApiService {
  constructor() {
    super('192.168.31.238');
  }

  login = (body: LoginBody): Promise<Record<string, any>> => {
    return this.POST<LoginBody, Record<string, any>>(v1.login, body);
  };
}
