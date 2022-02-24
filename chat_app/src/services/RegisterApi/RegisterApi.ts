import ApiService, {BASE_URL} from '../ApiServices';
import {v1} from './endpoints';

export default class RegisterApi extends ApiService {
  constructor() {
    super(BASE_URL);
  }

  register = (body: any): Promise<Record<string, any> | null> => {
    return this.POST<any, Record<string, any>>(v1.register, body);
  };
}
