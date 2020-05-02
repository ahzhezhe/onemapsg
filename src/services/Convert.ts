
import OneMap from '..';
import { Service } from '.';
import { APIRes } from '../Types';

export interface LatLonReq {
  latitude: number;
  longitude: number;
}
export interface XYReq {
  X: number;
  Y: number;
}
export interface LatLonRes extends APIRes {
  latitude: number;
  longitude: number;
}
export interface XYRes extends APIRes {
  X: number;
  Y: number;
}

export default class Convert extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'convert');
  }

  async _4326to3857(req: LatLonReq): Promise<XYRes> {
    return this.commonapi('4326to3857', req);
  }

  async _4326to3414(req: LatLonReq): Promise<XYRes> {
    return this.commonapi('4326to3414', req);
  }

  async _3414to3857(req: XYReq): Promise<LatLonRes> {
    return this.commonapi('3414to3857', req);
  }

  async _3414to4326(req: XYReq): Promise<LatLonRes> {
    return this.commonapi('3414to4326', req);
  }

  async _3857to3414(req: XYReq): Promise<LatLonRes> {
    return this.commonapi('3857to3414', req);
  }

  async _3857to4326(req: XYReq): Promise<LatLonRes> {
    return this.commonapi('3857to4326', req);
  }

}
