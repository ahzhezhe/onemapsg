import { oneMap } from '..';

test('revgeocodexy', async () => {
  const result = await oneMap.reverseGeocode.revgeocodexy({
    location: [28833.0605447, 31810.3242714]
  });
  expect(result).toMatchSnapshot();
});

test('revgeocode', async () => {
  const result = await oneMap.reverseGeocode.revgeocode({
    location: [1.3039454, 103.8408471]
  });
  expect(result).toMatchSnapshot();
});
