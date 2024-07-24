/**
 * Function that returns a promise based on the success parameter
 * @param {boolean} success - A boolean indicating whether the operation was successful
 * @returns {Promise<Object|Error>} - Resolves with an object or rejects with an error
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

