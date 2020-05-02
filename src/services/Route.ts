import OneMap from '..';
import { Service } from '.';
import { Coordinates, APIRes } from '../Types';

export interface RouteReq {
  start: Coordinates;
  end: Coordinates;
  routeType: 'walk' | 'drive' | 'pt' | 'cycle';
}
export interface RouteRes extends APIRes {
  status_message: string;
  alternative_names: string[][];
  route_name: string;
  route_geometry: string;
  route_instructions: (string | number)[][];
  alternative_summaries: {
    end_point: string;
    start_point: string;
    total_time: number;
    total_distance: number;
  }[];
  via_points: number[][];
  route_summary: {
    end_point: string;
    start_point: string;
    total_time: number;
    total_distance: number;
  };
  found_alternative: boolean;
  status: number;
  via_indices: number[];
  hint_data: {
    locations: number[];
    checksum: number;
  };
  alternative_geometries: string[];
  alternative_instructions: (string | number)[][][];
  alternative_indices: number[];
}

export default class Route extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'routingsvc');
  }

  async route(req: RouteReq): Promise<RouteRes> {
    const newReq: any = req;
    newReq.start = newReq.start.join(',');
    newReq.end = newReq.end.join(',');
    return this.privateapi('route', newReq);
  }

}
