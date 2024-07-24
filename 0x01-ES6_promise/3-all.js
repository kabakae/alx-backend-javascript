import { uploadPhoto, createUser } from './utils';

/**
 * Handles profile signup by resolving the uploadPhoto and createUser promises.
 * Logs the result to the console or logs an error message if a promise rejects.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
