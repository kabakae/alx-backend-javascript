import getResponseFromAPI from './0-promise.js';

test('getResponseFromAPI should return a promise', () => {
  const response = getResponseFromAPI();
  expect(response).toBeInstanceOf(Promise);
});

test('getResponseFromAPI promise should resolve to "Success!"', async () => {
  const response = await getResponseFromAPI();
  expect(response).toBe('Success!');
});

