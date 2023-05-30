import { useToast } from '@chakra-ui/react';
import { createContext, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCart = getLocalStorage('cart') || [];
  const [cart, setCart] = useState(initialCart);
  const initialPriceToCart = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const [priceTotalCart, setPriceTotalCart] = useState(initialPriceToCart);

  const toastAddProduct = useToast({
    title: 'Producto agregado al carrito',
    colorScheme: 'teal',
    duration: 2000,
    isClosable: true,
  });
  const toastOutOfStock = useToast({
    title: 'Producto sin stock',
    colorScheme: 'red',
    duration: 2000,
    isClosable: true,
  });

  const addToTotalPrice = (price) => {
    setPriceTotalCart((prev) => prev + price);
  };

  const addToCart = (product) => {
    let quantity = 1;

    const productInTheCart = cart.find((p) => p.id === product.id);

    if (
      productInTheCart &&
      productInTheCart.quantity < productInTheCart.stock
    ) {
      productInTheCart.quantity = productInTheCart.quantity + 1;

      setLocalStorage('cart', cart);
      addToTotalPrice(productInTheCart.price);
      toastAddProduct();
    } else if (!productInTheCart) {
      setCart([
        ...cart,
        {
          ...product,
          quantity,
        },
      ]);
      setLocalStorage('cart', [
        ...cart,
        {
          ...product,
          quantity,
        },
      ]);
      addToTotalPrice(product.price);
      toastAddProduct();
    } else {
      toastOutOfStock();
    }
  };

  const deleteToCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
    setLocalStorage(
      'cart',
      cart.filter((p) => p.id !== id)
    );
    const productToDelete = cart.find((p) => p.id === id);
    setPriceTotalCart(
      priceTotalCart - productToDelete.price * productToDelete.quantity
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
