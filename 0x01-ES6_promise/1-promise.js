/**
 * Returns a Promise that resolves or rejects based on the input boolean.
 * @param {boolean} success - Determines whether to resolve or reject the promise.
 * @returns {Promise<Object>} - A promise that resolves with an object or rejects with an error.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
