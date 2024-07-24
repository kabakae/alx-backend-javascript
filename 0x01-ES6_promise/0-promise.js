/**
 * Simulates uploading a photo and returns a promise with the response.
 * @returns {Promise<{ status: number, body: string }>} - A promise that resolves with the response data.
 */
export const uploadPhoto = () => {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
};

/**
 * Simulates creating a user and returns a promise with the response.
 * @returns {Promise<{ firstName: string, lastName: string }>} - A promise that resolves with the response data.
 */
export const createUser = () => {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
};

