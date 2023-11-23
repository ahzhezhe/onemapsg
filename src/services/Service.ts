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

  #getUri(endpoint: string, query: any): string {
    for (const key in query) {
      if (typeof query[key] === 'boolean') {
        query[key] = query[key] ? 'Y' : 'N';
      }
    }
    endpoint += `?${querystring.stringify(query)}`;
    return `${OneMap.BASE_URL}/${this.#route}/${endpoint}`;
  }

  async fetch(endpoint: string, query: any): Promise<any> {
    const uri = this.#getUri(endpoint, query);

    const response = await axios(uri, {
      proxy: this.onemap.options?.proxy,
      method: 'GET',
      headers: this.#auth ? {
        'Authorization': `Bearer ${await this.onemap.getAccessToken()}`
      } : undefined
    });

    return response.data;
  }

}
