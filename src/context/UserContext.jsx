import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import { auth } from '../firebase/config';

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [login, setLogin] = useState(false);

  const handleUser = (dataUser) => {
    setUser({ email: dataUser.user.email, uid: dataUser.user.uid });
    console.log(user);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user.email);
        setUser({ email: user.email, uid: uid });
      } else {
        console.log('no hay usuario');
      }
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <userContext.Provider value={{ user, handleUser, handleLogout }}>
      {children}
    </userContext.Provider>
  );
};
