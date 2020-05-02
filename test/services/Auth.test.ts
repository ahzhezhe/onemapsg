import { oneMap } from '..';

test('getToken', async () => {
  const result = await oneMap.auth.getToken();
  expect(result.access_token).toBeTruthy();
  expect(result.error).toBeUndefined();
});
