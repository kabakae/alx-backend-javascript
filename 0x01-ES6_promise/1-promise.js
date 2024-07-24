import getFullResponseFromAPI from './getFullResponseFromAPI';

describe('getFullResponseFromAPI', () => {
  it('should resolve with status 200 and body "Success" if success is true', () => {
    return expect(getFullResponseFromAPI(true)).resolves.toEqual({
      status: 200,
      body: 'Success'
    });
  });

  it('should reject with an error if success is false', () => {
    return expect(getFullResponseFromAPI(false)).rejects.toThrow('The fake API is not working currently');
  });
});
