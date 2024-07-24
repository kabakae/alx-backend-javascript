import { uploadPhoto, createUser } from './utils';

/**
 * Calls the uploadPhoto and createUser functions and returns an object with their responses.
 * If any of the functions fail, returns an empty object with null values.
 * @returns {Promise<Object>} - An object with the responses or an empty object on failure.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

