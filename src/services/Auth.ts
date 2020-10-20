import fetch from 'fetch-with-proxy';
import OneMap from '..';
import { Service } from '.';
import { APIRes } from '../Types';

export interface GetTokennRes extends APIRes {
  access_token: string;
  expiry_timestamp: string;
}

export default class Auth extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'auth');
  }

  async getToken(): Promise<GetTokennRes> {
    if (!this.onemap.credential) {
      throw new Error('No credential provided.');
    }
    if (!this.onemap.credential.email || !this.onemap.credential.password) {
      throw new Error('Incomplete credential provided.');
    }

    const response = await fetch(`${OneMap.BASE_URL}/privateapi/auth/post/getToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.onemap.credential)
    });

    return response.json();
  }

}
