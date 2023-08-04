import { oneMap } from '..';

test('getAllPlanningarea', async () => {
  const result = await oneMap.planningArea.getAllPlanningarea({
    year: 2020
  });
  expect(result).toMatchSnapshot();
});

test('getPlanningareaNames', async () => {
  const result = await oneMap.planningArea.getPlanningareaNames({
    year: 2020
  });
  expect(result).toMatchSnapshot();
});

test('getPlanningarea', async () => {
  const result = await oneMap.planningArea.getPlanningarea({
    lat: 1.3039454,
    lng: 103.8408471,
    year: 2020
  });
  expect(result).toMatchSnapshot();
});
