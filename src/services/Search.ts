import OneMap from '..';
import { Service } from '.';
import { APIRes } from '../Types';

export interface SearchReq {
  searchVal: string;
  returnGeom: boolean;
  getAddrDetails: boolean;
  pageNum?: number;
}
export interface SearchRes extends APIRes {
  found: number;
  totalNumPages: number;
  pageNum: number;
  results: {
    SEARCHVAL: string;
    BLK_NO: string;
    ROAD_NAME: string;
    BUILDING: string;
    ADDRESS: string;
    POSTAL: number;
    X: number;
    Y: number;
    LATITUDE: number;
    LONGITUDE: number;
  }[];
}

export default class Search extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'search');
  }

  async search(req: SearchReq): Promise<SearchRes> {
    return this.commonapi('', req);
  }

}
