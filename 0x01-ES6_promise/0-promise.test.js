import { uploadPhoto, createUser } from './0-promise';

// Test for uploadPhoto
test('uploadPhoto should return a response with status 200 and body "photo-profile-1"', async () => {
  const response = await uploadPhoto();
  expect(response).toEqual({
    status: 200,
    body: 'photo-profile-1',
  });
});

// Test for createUser
test('createUser should return a response with firstName "Guillaume" and lastName "Salva"', async () => {
  const response = await createUser();
  expect(response).toEqual({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
});

