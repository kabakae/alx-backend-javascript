/**
 * Returns a rejected promise with an error message.
 * @param {string} fileName - The name of the file to be processed.
 * @returns {Promise} - A promise that rejects with an Error object.
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
