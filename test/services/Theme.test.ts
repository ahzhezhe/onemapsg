import { oneMap } from '..';

test('checkThemeStatus', async () => {
  const result = await oneMap.theme.checkThemeStatus({
    queryName: 'liquor_control_zones',
    dateTime: new Date('2020-01-02 03:04:05')
  });
  expect(result).toMatchSnapshot();
});

test('getThemeInfo', async () => {
  const result = await oneMap.theme.getThemeInfo({
    queryName: 'liquor_control_zones'
  });
  expect(result).toMatchSnapshot();
});

test('getAllThemesInfo', async () => {
  const result = await oneMap.theme.getAllThemesInfo({
    moreInfo: true
  });
  expect(result).toMatchSnapshot();
});

test('retrieveTheme', async () => {
  const result = await oneMap.theme.retrieveTheme({
    queryName: 'liquor_control_zones',
    extents: [[1.3039454, 103.8408471]]
  });
  expect(result).toMatchSnapshot();
});
