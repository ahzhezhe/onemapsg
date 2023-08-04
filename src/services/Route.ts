import { OneMap } from '../OneMap';
import { Coordinates, ApiRes } from '../types';
import { Service } from '.';

export interface RouteReq {
  start: Coordinates;
  end: Coordinates;
  routeType: 'walk' | 'drive' | 'pt' | 'cycle';
}
export interface RouteRes extends ApiRes {
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

export class Route extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'public/routingsvc', true);
  }

  async route(req: RouteReq): Promise<RouteRes> {
    const newReq: any = req;
    newReq.start = newReq.start.join(',');
    newReq.end = newReq.end.join(',');
    return this.fetch('route', newReq);
  }

}
