import OneMap from '..';
import { Service } from '.';
import { Coordinates, APIRes } from '../Types';

export interface RevgeocodeReq {
  location: Coordinates;
  buffer?: number;
  addressType?: 'HDB' | 'All';
  otherFeatures?: boolean;
}
export interface RevgeocodeRes extends APIRes {
  GeocodeInfo: {
    BUILDINGNAME: string;
    BLOCK: string;
    ROAD: string;
    POSTALCODE: string;
    FEATURE_NAME: string;
    XCOORD: number;
    YCOORD: number;
    LATITUDE: number;
    LONGITUDE: number;
  }[];
}

export default class Common extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'commonsvc');
  }

  async revgeocodexy(req: RevgeocodeReq): Promise<RevgeocodeRes> {
    const newReq: any = req;
    newReq.location = newReq.location.join(',');
    return this.privateapi('revgeocodexy', newReq);
  }

  async revgeocode(req: RevgeocodeReq): Promise<RevgeocodeRes> {
    const newReq: any = req;
    newReq.location = newReq.location.join(',');
    return this.privateapi('revgeocode', newReq);
  }

}
