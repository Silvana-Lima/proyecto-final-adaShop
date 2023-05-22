import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { cartContext } from '../context/CartContext';
import { CartProductCard } from './CartProductCard';

export const DrawerCart = ({ handleIsCheckingOut }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { cart, clearCart, priceTotalCart } = useContext(cartContext);

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="Cart"
        icon={<AiOutlineShoppingCart />}
        colorScheme="teal"
        variant="outline"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mi carrito</DrawerHeader>

          <DrawerBody>
            {!cart.length && <Text>No hay productos en el carrito.</Text>}
            {cart &&
              cart.map((product) => (
                <CartProductCard
                  size={'sm'}
                  product={product}
                  key={product.id}
                  deleteButton
                />
              ))}
          </DrawerBody>

          <DrawerFooter pr={3} display={cart.length ? 'block' : 'none'}>
            <VStack>
              <Text>{`Total $${priceTotalCart}`}</Text>
              <Flex>
                <Button
                  variant="outline"
                  colorScheme="orange"
                  mr={3}
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </Button>
                <Button
                  colorScheme="teal"
                  as={Link}
                  to="/checkout"
                  onClick={() => onClose(handleIsCheckingOut())}
                >
                  Finalizar Compra
                </Button>
              </Flex>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
