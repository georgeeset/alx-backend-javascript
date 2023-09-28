import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((responce) => {
      console.log(`${responce[0].body} ${responce[1].firstName} ${responce[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
