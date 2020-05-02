import { oneMap } from '..';

test('getAllPlanningarea', async () => {
  const result = await oneMap.planning.getAllPlanningarea({
    year: 2020
  });
  expect(result).toMatchSnapshot();
});

test('getPlanningareaNames', async () => {
  const result = await oneMap.planning.getPlanningareaNames({
    year: 2020
  });
  expect(result).toMatchSnapshot();
});

test('getPlanningarea', async () => {
  const result = await oneMap.planning.getPlanningarea({
    lat: 1.3039454,
    lng: 103.8408471,
    year: 2020
  });
  expect(result).toMatchSnapshot();
});
