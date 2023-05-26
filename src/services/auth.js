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

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const userGoogle = await signInWithPopup(auth, provider);
  const user = userGoogle.user;
  return user;
};
