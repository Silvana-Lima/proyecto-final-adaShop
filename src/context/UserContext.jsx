import { createContext, useState } from 'react';

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [login, setLogin] = useState(false);

  const handleUser = (dataUser) => {
    setUser(dataUser);
    console.log(user);
  };

  // const handleLogin = () => {
  //   setLogin(true);
  // };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <userContext.Provider value={{ user, handleUser, handleLogout }}>
      {children}
    </userContext.Provider>
  );
};
