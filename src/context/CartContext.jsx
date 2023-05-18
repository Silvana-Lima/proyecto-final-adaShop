import { createContext, useState } from 'react';

export const cartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <cartContext.Provider value={{ cart, handleCart }}>
      {children}
    </cartContext.Provider>
  );
};
