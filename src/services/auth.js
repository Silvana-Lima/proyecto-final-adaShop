import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from '../firebase/config';

export const registerUser = async (data) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );
  const newUser = userCredential.user;
  return newUser;
};

export const loginWithEmail = async (data) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );
  const user = userCredential.user;
  return user;
};

const provider = new GoogleAuthProvider();

//Add a custom parameter to the Google authentication provider to force the selection of an account each time a login attempt is made.
provider.setCustomParameters({
  prompt: 'select_account',
});

export const loginWithGoogle = async () => {
  const userGoogle = await signInWithPopup(auth, provider);
  const user = userGoogle.user;
  return user;
};
