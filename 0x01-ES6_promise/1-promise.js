// getFullResponseFromAPI.test.js
import getFullResponseFromAPI from './getFullResponseFromAPI';

describe('getFullResponseFromAPI', () => {
  it('should resolve with the correct object when success is true', async () => {
    const response = await getFullResponseFromAPI(true);
    expect(response).toEqual({
      status: 200,
      body: 'Success'
    });
  });

  it('should reject with an error when success is false', async () => {
    await expect(getFullResponseFromAPI(false)).rejects.toThrow('The fake API is not working currently');
  });
});

