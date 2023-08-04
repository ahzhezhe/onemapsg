import { oneMap } from '..';

test('_4326to3857', async () => {
  const result = await oneMap.coordinateConverter._4326to3857({
    latitude: 1.3039454,
    longitude: 103.8408471
  });
  expect(result).toMatchSnapshot();
});

test('_4326to3414', async () => {
  const result = await oneMap.coordinateConverter._4326to3414({
    latitude: 1.3039454,
    longitude: 103.8408471
  });
  expect(result).toMatchSnapshot();
});

test('_3414to3857', async () => {
  const result = await oneMap.coordinateConverter._3414to3857({
    X: 28833.0605447,
    Y: 31810.3242714
  });
  expect(result).toMatchSnapshot();
});

test('_3414to4326', async () => {
  const result = await oneMap.coordinateConverter._3414to4326({
    X: 28833.0605447,
    Y: 31810.3242714
  });
  expect(result).toMatchSnapshot();
});

test('_3857to3414', async () => {
  const result = await oneMap.coordinateConverter._3857to3414({
    X: 28833.0605447,
    Y: 31810.3242714
  });
  expect(result).toMatchSnapshot();
});

test('_3857to4326', async () => {
  const result = await oneMap.coordinateConverter._3857to4326({
    X: 28833.0605447,
    Y: 31810.3242714
  });
  expect(result).toMatchSnapshot();
});
