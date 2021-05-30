import { OneMap } from '../OneMap';
import { ApiRes } from '../types';
import { Service } from '.';

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

export class Planning extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'popapi');
  }

  async getAllPlanningarea(req: GetAllPlanningareaReq): Promise<PlanningareaRes[] | ApiRes> {
    return this.privateapi('getAllPlanningarea', req);
  }

  async getPlanningareaNames(req: GetPlanningareaNamesReq): Promise<GetPlanningareaNamesRes[] | ApiRes> {
    return this.privateapi('getPlanningareaNames', req);
  }

  async getPlanningarea(req: GetPlanningareaReq): Promise<PlanningareaRes[] | ApiRes> {
    return this.privateapi('getPlanningarea', req);
  }

}
