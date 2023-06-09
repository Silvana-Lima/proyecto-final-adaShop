import { onAuthStateChanged, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import { auth } from '../firebase/config';

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [errorUser, setErrorUser] = useState(false);

  const handleUser = (dataUser) => {
    setUser({ email: dataUser.email, uid: dataUser.uid });
  };

  useEffect(() => {
    const getUser = () => {
      onAuthStateChanged(auth, (user) => {
        try {
          if (user) {
            const uid = user.uid;
            setUser({ email: user.email, uid: uid });
          } else {
            setUser(null);
          }
          setLoadingUser(false);
        } catch (error) {
          setErrorUser(true);
          setLoadingUser(false);
        }
      });
    };
    getUser();
  }, []);

  const handleLogout = () => {
    setUser(null);
    signOut(auth);
  };

  return (
    <userContext.Provider
      value={{ user, handleUser, handleLogout, loadingUser, errorUser }}
    >
      {children}
    </userContext.Provider>
  );
};
