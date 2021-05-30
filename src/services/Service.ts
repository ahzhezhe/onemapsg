import axios from 'axios';
import querystring from 'querystring';
import OneMap from '..';

export class Service {

  readonly onemap: OneMap;
  readonly #serviceName: string;

  protected constructor(onemap: OneMap, serviceName: string) {
    this.onemap = onemap;
    this.#serviceName = serviceName;
  }

  async commonapi(endpoint: string, query?: any): Promise<any> {
    return this.#fetch('commonapi', endpoint, query);
  }

  async privateapi(endpoint: string, query?: any): Promise<any> {
    const auth = await this.onemap.auth.getToken();
    if (query) {
      query.token = auth.access_token;
    } else {
      query = { token: auth.access_token };
    }
    return this.#fetch('privateapi', endpoint, query);
  }

  getCommonApiUri(endpoint: string, query?: any): string {
    return this.#getUri('commonapi', endpoint, query);
  }

  #getUri(type: 'commonapi' | 'privateapi', endpoint: string, query?: any): string {
    if (query) {
      for (const key in query) {
        if (typeof query[key] === 'boolean') {
          query[key] = query[key] ? 'Y' : 'N';
        }
      }
      endpoint += `?${querystring.stringify(query)}`;
    }
    return `${OneMap.BASE_URL}/${type}/${this.#serviceName}/${endpoint}`;
  }

  async #fetch(type: 'commonapi' | 'privateapi', endpoint: string, query?: any): Promise<any> {
    const uri = this.#getUri(type, endpoint, query);

    const response = await axios(uri, {
      proxy: this.onemap.options?.proxy,
      method: 'GET'
    });

    return response.data;
  }

}
