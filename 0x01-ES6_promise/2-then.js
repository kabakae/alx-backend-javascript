/**
 * Handles a promise by attaching handlers for resolution and rejection.
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise<Object|Error>} - A promise that resolves with an object or an empty Error.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => {
      return new Error();
    });
}
