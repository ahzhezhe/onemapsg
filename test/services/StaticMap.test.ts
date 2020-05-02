import { oneMap } from '..';

test('getStaticImageUri', () => {
  const result = oneMap.staticMap.getStaticImageUri({
    layerchosen: 'night',
    lat: 1.3039454,
    lng: 103.8408471,
    postal: '542226',
    zoom: 15,
    width: 500,
    height: 500,
    polygons: [
      {
        points: [[1.3039454, 103.8408471], [1.3039454, 103.8408471]],
        color: [50, 100, 150]
      },
      {
        points: [[1.3039454, 103.8408471], [1.3039454, 103.8408471]],
        color: [50, 100, 150]
      }
    ],
    lines: [
      {
        points: [[1.3039454, 103.8408471], [1.3039454, 103.8408471]],
        color: [50, 100, 150],
        thickness: 3
      },
      {
        points: [[1.3039454, 103.8408471], [1.3039454, 103.8408471]],
        color: [50, 100, 150],
        thickness: 3
      }
    ],
    points: [
      {
        point: [1.3039454, 103.8408471],
        color: [50, 100, 150],
        label: 'A'
      },
      {
        point: [1.3039454, 103.8408471],
        color: [50, 100, 150],
        label: 'B'
      }
    ],
    color: [50, 100, 150],
    fillColor: [50, 100, 150]
  });
  expect(result).toMatchSnapshot();
});
