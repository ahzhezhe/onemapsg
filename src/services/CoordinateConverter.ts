
import { OneMap } from '../OneMap';
import { ApiRes } from '../types';
import { Service } from '.';

export interface LatLonReq {
  latitude: number;
  longitude: number;
}
export interface XYReq {
  X: number;
  Y: number;
}
export interface LatLonRes extends ApiRes {
  latitude: number;
  longitude: number;
}
export interface XYRes extends ApiRes {
  X: number;
  Y: number;
}

export class CoordinateConverter extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'common/convert', true);
  }

  async _4326to3857(req: LatLonReq): Promise<XYRes> {
    return this.fetch('4326to3857', req);
  }

  async _4326to3414(req: LatLonReq): Promise<XYRes> {
    return this.fetch('4326to3414', req);
  }

  async _3414to3857(req: XYReq): Promise<LatLonRes> {
    return this.fetch('3414to3857', req);
  }

  async _3414to4326(req: XYReq): Promise<LatLonRes> {
    return this.fetch('3414to4326', req);
  }

  async _3857to3414(req: XYReq): Promise<LatLonRes> {
    return this.fetch('3857to3414', req);
  }

  async _3857to4326(req: XYReq): Promise<LatLonRes> {
    return this.fetch('3857to4326', req);
  }

}
