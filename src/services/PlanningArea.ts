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
  latitude: number;
  longitude: number;
  year: number;
}

export class PlanningArea extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'public/popapi', true);
  }

  async getAllPlanningarea(req: GetAllPlanningareaReq): Promise<PlanningareaRes[] | ApiRes> {
    return this.fetch('getAllPlanningarea', req);
  }

  async getPlanningareaNames(req: GetPlanningareaNamesReq): Promise<GetPlanningareaNamesRes[] | ApiRes> {
    return this.fetch('getPlanningareaNames', req);
  }

  async getPlanningarea(req: GetPlanningareaReq): Promise<PlanningareaRes[] | ApiRes> {
    return this.fetch('getPlanningarea', req);
  }

}
