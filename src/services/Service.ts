import querystring from 'querystring';
import axios from 'axios';
import { OneMap } from '../OneMap';

export class Service {

  protected readonly onemap: OneMap;
  readonly #route?: string;
  readonly #auth?: boolean;

  protected constructor(onemap: OneMap, route: string, auth?: boolean) {
    this.onemap = onemap;
    this.#route = route;
    this.#auth = auth;
  }

  getUri(endpoint: string, query?: any): string {
    if (query) {
      for (const key in query) {
        if (typeof query[key] === 'boolean') {
          query[key] = query[key] ? 'Y' : 'N';
        }
      }
      endpoint += `?${querystring.stringify(query)}`;
    }
    return `${OneMap.BASE_URL}/${this.#route}/${endpoint}`;
  }

  async fetch(endpoint: string, query?: any): Promise<any> {
    if (this.#auth) {
      const auth = await this.onemap.auth.getToken();
      if (query) {
        query.token = auth.access_token;
      } else {
        query = { token: auth.access_token };
      }
    }

    const uri = this.getUri(endpoint, query);

    const response = await axios(uri, {
      proxy: this.onemap.options?.proxy,
      method: 'GET'
    });

    return response.data;
  }

}
