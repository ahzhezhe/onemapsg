import { OneMap } from '../OneMap';
import { Coordinates, Color } from '../types';
import { Service } from '.';

export interface GetStaticImageUriReq {
  layerchosen: 'night' | 'grey' | 'original' | 'default' | 'landlot';
  lat: number;
  lng: number;
  postal?: string;
  zoom: number;
  width: number;
  height: number;
  polygons?: {
    points: Coordinates[];
    color: Color;
  }[];
  lines?: {
    points: Coordinates[];
    color: Color;
    thickness: number;
  }[];
  points?: {
    point: Coordinates;
    color: Color;
    label: string;
  }[];
  color?: Color;
  fillColor?: Color;
}

export class StaticMap extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'staticmap');
  }

  getStaticImageUri(req: GetStaticImageUriReq): string {
    const newReq: any = req;
    if (newReq.polygons) {
      newReq.polygons = newReq.polygons.map((polygon: any) => `${JSON.stringify(polygon.points)}:${polygon.color.join(',')}`).join('|');
    }
    if (newReq.lines) {
      newReq.lines = newReq.lines.map((line: any) => `${JSON.stringify(line.points)}:${line.color.join(',')}:${line.thickness}`).join('|');
    }
    if (newReq.points) {
      newReq.points = newReq.points.map((point: any) => `[${point.point.join(',')},"${point.color.join(',')}","${point.label}"]`).join('|');
    }
    if (newReq.color) {
      newReq.color = newReq.color.join(',');
    }
    if (newReq.fillColor) {
      newReq.fillColor = newReq.fillColor.join(',');
    }
    return this.getCommonApiUri('getStaticImage', newReq);
  }

}
