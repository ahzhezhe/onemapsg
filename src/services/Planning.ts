import OneMap from '..';
import { Service } from '.';
import { APIRes } from '../Types';

export interface GetAllPlanningareaReq {
  year: number;
}
export interface PlanningareaRes {
  geojson: string;
  pln_area_n: string;
}
export interface GetPlanningareaNamesReq {
  year: number;
}
export interface GetPlanningareaNamesRes {
  id: number;
  pln_area_n: string;
}
export interface GetPlanningareaReq {
  lat: number;
  lng: number;
  year: number;
}

export default class Planning extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'popapi');
  }

  async getAllPlanningarea(req: GetAllPlanningareaReq): Promise<PlanningareaRes[] | APIRes> {
    return this.privateapi('getAllPlanningarea', req);
  }

  async getPlanningareaNames(req: GetPlanningareaNamesReq): Promise<GetPlanningareaNamesRes[] | APIRes> {
    return this.privateapi('getPlanningareaNames', req);
  }

  async getPlanningarea(req: GetPlanningareaReq): Promise<PlanningareaRes[] | APIRes> {
    return this.privateapi('getPlanningarea', req);
  }

}
