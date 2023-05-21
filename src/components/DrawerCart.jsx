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
import { userContext } from '../context/UserContext';
import { CartCard } from './CartProductCard';

export const DrawerCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { cart, clearCart, priceTotalCart } = useContext(cartContext);
  const { user } = useContext(userContext);

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
                <CartCard size={'sm'} product={product} key={product.id} />
              ))}
          </DrawerBody>

          <DrawerFooter pr={3}>
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
                  to={user ? '/checkout' : '/login'}
                  onClick={onClose}
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
