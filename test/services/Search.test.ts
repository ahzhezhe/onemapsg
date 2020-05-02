import { oneMap } from '..';

test('search', async () => {
  const result = await oneMap.search.search({
    searchVal: '542226',
    returnGeom: true,
    getAddrDetails: true
  });
  expect(result).toMatchSnapshot();
});
