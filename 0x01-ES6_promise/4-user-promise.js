/**
 * Returns a resolved promise with an object containing firstName and lastName.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise<Object>} - A promise that resolves with an object.
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName
  });
}
