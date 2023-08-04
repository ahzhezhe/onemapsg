import axios, { AxiosProxyConfig } from 'axios';
import { Search, ReverseGeocode, CoordinateConverter, Theme, PlanningArea, Population, Route } from './services';

export interface Credential {
  email: string;
  password: string;
}

export interface Options {
  credential?: Credential;
  proxy?: AxiosProxyConfig | false;
}

interface Token {
  access_token: string;
  expiry_timestamp: number;
}

export class OneMap {

  static readonly BASE_URL = 'https://www.onemap.gov.sg/api';

  readonly options?: Options;

  readonly search: Search;
  readonly reverseGeocode: ReverseGeocode;
  readonly coordinateConverter: CoordinateConverter;
  readonly theme: Theme;
  readonly planningArea: PlanningArea;
  readonly population: Population;
  readonly route: Route;

  #token?: Token;

  constructor(options?: Options) {
    this.options = options;

    this.search = new Search(this);
    this.reverseGeocode = new ReverseGeocode(this);
    this.coordinateConverter = new CoordinateConverter(this);
    this.theme = new Theme(this);
    this.planningArea = new PlanningArea(this);
    this.population = new Population(this);
    this.route = new Route(this);
  }

  async getAccessToken(): Promise<string> {
    if (this.#token) {
      const { access_token, expiry_timestamp } = this.#token;
      if (expiry_timestamp > new Date().getTime()) {
        return access_token;
      }
    }

    if (!this.options?.credential) {
      throw new Error('No credential provided.');
    }
    if (!this.options?.credential?.email || !this.options?.credential?.password) {
      throw new Error('Incomplete credential provided.');
    }

    const response = await axios(`${OneMap.BASE_URL}/auth/post/getToken`, {
      proxy: this.options?.proxy,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: this.options.credential
    });

    const { access_token, expiry_timestamp } = response.data;
    this.#token = { access_token, expiry_timestamp: Number(expiry_timestamp) };

    return access_token;
  }

}
