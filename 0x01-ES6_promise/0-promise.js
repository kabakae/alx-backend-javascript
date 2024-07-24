/**
 * Returns a Promise that resolves immediately.
 * @returns {Promise<void>} - A promise that resolves with no value.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve();
  });
}
