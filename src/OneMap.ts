import { AxiosProxyConfig } from 'axios';
import { Auth, Search, Common, Convert, Theme, Planning, Population, Route, StaticMap } from './services';

export interface Credential {
  email: string;
  password: string;
}

export interface Options {
  credential?: Credential;
  proxy?: AxiosProxyConfig | false;
}

export class OneMap {

  static readonly BASE_URL = 'https://developers.onemap.sg';

  readonly options?: Options;

  readonly auth: Auth;
  readonly search: Search;
  readonly common: Common;
  readonly convert: Convert;
  readonly theme: Theme;
  readonly planning: Planning;
  readonly population: Population;
  readonly route: Route;
  readonly staticMap: StaticMap;

  constructor(options?: Options) {
    this.options = options;

    this.auth = new Auth(this);
    this.search = new Search(this);
    this.common = new Common(this);
    this.convert = new Convert(this);
    this.theme = new Theme(this);
    this.planning = new Planning(this);
    this.population = new Population(this);
    this.route = new Route(this);
    this.staticMap = new StaticMap(this);
  }

}
