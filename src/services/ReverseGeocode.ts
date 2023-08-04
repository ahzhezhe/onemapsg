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

export class ReverseGeocode extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'public', true);
  }

  async revgeocodexy(req: RevgeocodeReq): Promise<RevgeocodeRes> {
    const newReq: any = req;
    newReq.location = newReq.location.join(',');
    return this.fetch('revgeocodexy', newReq);
  }

  async revgeocode(req: RevgeocodeReq): Promise<RevgeocodeRes> {
    const newReq: any = req;
    newReq.location = newReq.location.join(',');
    return this.fetch('revgeocode', newReq);
  }

}
