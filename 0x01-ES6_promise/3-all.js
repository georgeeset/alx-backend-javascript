import { uploadPhoto } from './utils';
import { createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all(uploadPhoto(), createUser()).then((message) => {
    const { body } = message[0];
    const { firstName, lastName } = message[1];
    console.log(`${body} ${firstName} ${lastName}`);
  })
    .catch(() => console.log('Signup system offline'));
}
