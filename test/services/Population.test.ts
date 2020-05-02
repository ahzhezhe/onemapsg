import { oneMap } from '..';

const req = {
  year: 2018,
  planningArea: 'BEDOK'
};

test('getEconomicStatus', async () => {
  const result = await oneMap.population.getEconomicStatus(req);
  expect(result).toMatchSnapshot();
});

test('getEducationAttending', async () => {
  const result = await oneMap.population.getEducationAttending(req);
  expect(result).toMatchSnapshot();
});

test('getEthnicGroup', async () => {
  const result = await oneMap.population.getEthnicGroup(req);
  expect(result).toMatchSnapshot();
});

test('getHouseholdMonthlyIncomeWork', async () => {
  const result = await oneMap.population.getHouseholdMonthlyIncomeWork(req);
  expect(result).toMatchSnapshot();
});

test('getHouseholdSize', async () => {
  const result = await oneMap.population.getHouseholdSize(req);
  expect(result).toMatchSnapshot();
});

test('getHouseholdStructure', async () => {
  const result = await oneMap.population.getHouseholdStructure(req);
  expect(result).toMatchSnapshot();
});

test('getIncomeFromWork', async () => {
  const result = await oneMap.population.getIncomeFromWork(req);
  expect(result).toMatchSnapshot();
});

test('getIndustry', async () => {
  const result = await oneMap.population.getIndustry(req);
  expect(result).toMatchSnapshot();
});

test('getLanguageLiterate', async () => {
  const result = await oneMap.population.getLanguageLiterate(req);
  expect(result).toMatchSnapshot();
});

test('getMaritalStatus', async () => {
  const result = await oneMap.population.getMaritalStatus(req);
  expect(result).toMatchSnapshot();
});

test('getModeOfTransportSchool', async () => {
  const result = await oneMap.population.getModeOfTransportSchool(req);
  expect(result).toMatchSnapshot();
});

test('getModeOfTransportWork', async () => {
  const result = await oneMap.population.getModeOfTransportWork(req);
  expect(result).toMatchSnapshot();
});

test('getOccupation', async () => {
  const result = await oneMap.population.getOccupation(req);
  expect(result).toMatchSnapshot();
});

test('getPopulationAgeGroup', async () => {
  const result = await oneMap.population.getPopulationAgeGroup(req);
  expect(result).toMatchSnapshot();
});

test('getReligion', async () => {
  const result = await oneMap.population.getReligion(req);
  expect(result).toMatchSnapshot();
});

test('getSpokenAtHome', async () => {
  const result = await oneMap.population.getSpokenAtHome(req);
  expect(result).toMatchSnapshot();
});

test('getTenancy', async () => {
  const result = await oneMap.population.getTenancy(req);
  expect(result).toMatchSnapshot();
});

test('getTypeOfDwellingHousehold', async () => {
  const result = await oneMap.population.getTypeOfDwellingHousehold(req);
  expect(result).toMatchSnapshot();
});

test('getTypeOfDwellingPop', async () => {
  const result = await oneMap.population.getTypeOfDwellingPop(req);
  expect(result).toMatchSnapshot();
});
