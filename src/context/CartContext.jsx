import { createContext, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const cartContext = createContext();
export const CartProvider = ({ children }) => {
  const initialCart = getLocalStorage('cart') || [];
  const [cart, setCart] = useState(initialCart);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setLocalStorage('cart', [...cart, product]);
  };

  const deleteToCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
    setLocalStorage(
      'cart',
      cart.filter((p) => p.id !== id)
    );
  };

  const clearCart = () => {
    setCart([]);
    setLocalStorage('cart', []);
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, deleteToCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};
