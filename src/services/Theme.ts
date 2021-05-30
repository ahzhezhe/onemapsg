import dayjs from 'dayjs';
import { OneMap } from '../OneMap';
import { Coordinates, ApiRes } from '../types';
import { Service } from '.';

export interface CheckThemeStatusReq {
  queryName: string;
  dateTime: Date;
}
export interface CheckThemeStatusRes extends ApiRes {
  UpdatedFile: boolean;
}

export interface GetThemeInfoReq {
  queryName: string;
}
export interface GetThemeInfoRes extends ApiRes {
  Theme_Names: {
    THEMENAME: string;
    QUERYNAME: string;
  }[];
}

export interface GetAllThemesInfoReq {
  moreInfo?: boolean;
}
export interface GetAllThemesInfoRes extends ApiRes {
  Theme_Names: {
    THEMENAME: string;
    QUERYNAME: string;
  }[];
}

export interface RetrieveThemeReq {
  queryName: string;
  extents: Coordinates[];
}
export interface RetrieveThemeRes extends ApiRes {
  SrchResults: {
    FeatCount: number;
    Theme_Name: string;
    Category: string;
    Owner: string;
    DateTime: {
      date: string;
      timezone_type: number;
      timezone: string;
    };
  }[];
}

export class Theme extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'themesvc');
  }

  async checkThemeStatus(req: CheckThemeStatusReq): Promise<CheckThemeStatusRes> {
    const newReq: any = req;
    newReq.dateTime = dayjs(req.dateTime).format('YYYY-MM-DD[T]HH:mm:ss[:000Z]');
    return this.privateapi('checkThemeStatus', newReq);
  }

  async getThemeInfo(req: GetThemeInfoReq): Promise<GetThemeInfoRes> {
    return this.privateapi('getThemeInfo', req);
  }

  async getAllThemesInfo(req: GetAllThemesInfoReq): Promise<GetAllThemesInfoRes> {
    return this.privateapi('getAllThemesInfo', req);
  }

  async retrieveTheme(req: RetrieveThemeReq): Promise<RetrieveThemeRes> {
    const extents: number[] = [];
    for (const coord of req.extents) {
      extents.push(...coord);
    }
    const newReq: any = req;
    newReq.extents = extents.join(',');
    return this.privateapi('retrieveTheme', req);
  }

}
