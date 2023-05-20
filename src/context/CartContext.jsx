import { useToast } from '@chakra-ui/react';
import { createContext, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCart = getLocalStorage('cart') || [];
  const [cart, setCart] = useState(initialCart);
  const initialPriceToCart = cart.reduce((acc, product) => {
    return acc + product.totalPrice;
  }, 0);
  const [priceTotalCart, setPriceTotalCart] = useState(initialPriceToCart);
  const toast = useToast();

  const addToTotalPrice = (acc) => {
    setPriceTotalCart(
      cart.reduce((acc, product) => {
        return acc + product.totalPrice;
      }, acc)
    );
  };

  const addToCart = (product) => {
    let quantity = 1;
    let totalPrice = product.price;

    const productInTheCart = cart.find((p) => p.id === product.id);

    if (productInTheCart) {
      productInTheCart.quantity = productInTheCart.quantity + 1;
      productInTheCart.totalPrice =
        productInTheCart.price * productInTheCart.quantity;

      addToTotalPrice(0);

      setLocalStorage('cart', cart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity,
          totalPrice,
        },
      ]);
      setLocalStorage('cart', [
        ...cart,
        {
          ...product,
          quantity,
          totalPrice,
        },
      ]);

      addToTotalPrice(totalPrice);
    }
    toast({
      title: 'Producto agregado al carrito',
      colorScheme: 'teal',
      duration: 2000,
      isClosable: true,
    });
  };

  const deleteToCart = (id) => {
    const productToDelete = cart.find((p) => p.id === id);
    setPriceTotalCart(priceTotalCart - productToDelete.totalPrice);

    setCart(cart.filter((p) => p.id !== id));
    setLocalStorage(
      'cart',
      cart.filter((p) => p.id !== id)
    );
  };

  const clearCart = () => {
    setCart([]);
    setLocalStorage('cart', []);
    setPriceTotalCart(0);
  };

  return (
    <cartContext.Provider
      value={{ cart, deleteToCart, clearCart, addToCart, priceTotalCart }}
    >
      {children}
    </cartContext.Provider>
  );
};
