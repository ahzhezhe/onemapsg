import { OneMap } from '../OneMap';
import { Coordinates, ApiRes } from '../types';
import { Service } from '.';

export interface RevgeocodeReq {
  location: Coordinates;
  buffer?: number;
  addressType?: 'HDB' | 'All';
  otherFeatures?: boolean;
}
export interface RevgeocodeRes extends ApiRes {
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

export class Common extends Service {

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
