import { AxiosProxyConfig } from 'axios';
import { Auth, Search, ReverseGeocode, CoordinateConverter, Theme, PlanningArea, Population, Route } from './services';

export interface Credential {
  email: string;
  password: string;
}

export interface Options {
  credential?: Credential;
  proxy?: AxiosProxyConfig | false;
}

export class OneMap {

  static readonly BASE_URL = 'https://www.onemap.gov.sg/api';

  readonly options?: Options;

  readonly auth: Auth;
  readonly search: Search;
  readonly reverseGeocode: ReverseGeocode;
  readonly coordinateConverter: CoordinateConverter;
  readonly theme: Theme;
  readonly planningArea: PlanningArea;
  readonly population: Population;
  readonly route: Route;

  constructor(options?: Options) {
    this.options = options;

    this.auth = new Auth(this);
    this.search = new Search(this);
    this.reverseGeocode = new ReverseGeocode(this);
    this.coordinateConverter = new CoordinateConverter(this);
    this.theme = new Theme(this);
    this.planningArea = new PlanningArea(this);
    this.population = new Population(this);
    this.route = new Route(this);
  }

}
