import ApiService, {BASE_URL} from '../ApiServices';
import {v1} from './endpoints';

export default class HomeApi extends ApiService {
  constructor() {
    super(BASE_URL);
  }

  joinChatRoom = (body: any): Promise<Record<string, any> | null> => {
    return this.POST<any, Record<string, any>>(v1.joinRoomChat, body);
  };
}
