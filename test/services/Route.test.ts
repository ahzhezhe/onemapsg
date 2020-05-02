import { oneMap } from '..';

test('route', async () => {
  const result = await oneMap.route.route({
    start: [1.3039454, 103.8408471],
    end: [1.3039454, 103.8408471],
    routeType: 'drive'
  });
  expect(result).toMatchSnapshot();
});
