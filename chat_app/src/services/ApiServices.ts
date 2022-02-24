import axios, {AxiosRequestConfig, CancelTokenSource, Method} from 'axios';
import qs from 'qs';
import {NativeModules} from 'react-native';

interface RequestOption {
  showLoading?: boolean;
  showDialog?: boolean;
  keyHoldData?: string;
  title?: string;
  message?: string;
}

export const BASE_URL = 'http://192.168.31.238:9000';

export const TOKEN = '';

export default class ApiService {
  baseUrl = '';
  headers = {};
  requestTokens: {
    [K: string]: CancelTokenSource;
  } = {};
  constructor(baseUrl = '', headers = {}) {
    this.baseUrl = baseUrl;
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    };
    Object.assign(this.headers, headers);
  }

  cancelAllRequests(): void {
    Object.values(this.requestTokens).forEach(token => token.cancel());
  }

  async fetchData<I, O>(
    url: string,
    method: Method,
    data: I | null,
    isQuery: boolean,
    option: RequestOption = {},
    headers = {},
  ): Promise<O | null> {
    // cancel previous token before sending new request
    if (this.requestTokens[url]) {
      this.requestTokens[url].cancel();
    }

    headers = {
      ...headers,
      'x-auth-token': TOKEN,
    };
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const defaultOption: RequestOption = {
      showLoading: true,
      showDialog: false,
      keyHoldData: '',
    };
    option = {...defaultOption, ...option};
    let route = `${this.baseUrl}${url}`;
    if (isQuery && data) {
      const query = qs.stringify(data);
      route = `${route}?${query}`;
      data = null;
    }
    const options: AxiosRequestConfig = {
      method,
      url: route,
      timeout: 15000,
      headers: {...this.headers, ...(Boolean(headers) && headers)},
      cancelToken: source.token,
    };

    if (data) {
      Object.assign(options, {
        data: JSON.stringify(data),
      });
    }

    if (option.showLoading) {
      NativeModules.LoadingNative.showLoading();
    }
    this.requestTokens[url] = source;

    try {
      const rs = await axios.request<O>(options);
      NativeModules.LoadingNative.hideLoading();

      const dataRespond = option.keyHoldData
        ? JSON.parse(rs.data[option.keyHoldData])
        : rs.data;

      return dataRespond;
    } catch (error) {
      console.log('error_fetch', error);
      NativeModules.LoadingNative.hideLoading();
      if (error.message === 'Network Error') {
        console.log('Thất bại', 'Gửi yêu cầu thất bại.');
      } else if (option.showDialog) {
        const {response} = error;
        console.log('Thất bại', response);
      }
      // throw error;
      return null;
    } finally {
      delete this.requestTokens[url];
    }
  }

  GET<I, O>(
    route: string,
    query: I,
    option?: RequestOption,
    headers = {},
  ): Promise<O | null> {
    return this.fetchData<I, O>(route, 'GET', query, true, option, headers);
  }

  POST<I, O>(
    route: string,
    body: I,
    option?: RequestOption,
    headers = {},
  ): Promise<O | null> {
    return this.fetchData<I, O>(route, 'POST', body, false, option, headers);
  }

  PUT<I, O>(
    route: string,
    body: I,
    option?: RequestOption,
    headers = {},
  ): Promise<O | null> {
    return this.fetchData<I, O>(route, 'PUT', body, false, option, headers);
  }

  DELETE<I, O>(
    route: string,
    query: I,
    option?: RequestOption,
    headers = {},
  ): Promise<O | null> {
    return this.fetchData<I, O>(route, 'DELETE', query, true, option, headers);
  }
}
