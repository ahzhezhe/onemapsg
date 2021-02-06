import axios from 'axios';
import OneMap from '..';
import { Service } from '.';
import { ApiRes } from '../types';

export interface GetTokennRes extends ApiRes {
  access_token: string;
  expiry_timestamp: string;
}

export class Auth extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'auth');
  }

  async getToken(): Promise<GetTokennRes> {
    if (!this.onemap.options?.credential) {
      throw new Error('No credential provided.');
    }
    if (!this.onemap.options?.credential?.email || !this.onemap.options?.credential?.password) {
      throw new Error('Incomplete credential provided.');
    }

    const response = await axios(`${OneMap.BASE_URL}/privateapi/auth/post/getToken`, {
      proxy: this.onemap.options?.proxy,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: this.onemap.options.credential
    });

    return response.data;
  }

}
