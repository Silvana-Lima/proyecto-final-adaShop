import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { cartContext } from '../context/CartContext';

export const DrawerCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { cart, deleteToCart, clearCart, total } = useContext(cartContext);

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
            {cart &&
              cart.map((p) => (
                <Card
                  direction={'row'}
                  overflow="hidden"
                  variant="outline"
                  size={'sm'}
                  p={1}
                  justifyContent={'space-around'}
                  key={p.id}
                  mb={3}
                >
                  <Image
                    objectFit="cover"
                    maxW={'50%'}
                    src={p.image}
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody p={2}>
                      <Heading size="sm">{p.name}</Heading>

                      <Text>
                        {`Precio x u.: $${p.price}`}
                        <br /> {`Cantidad: ${p.quantity}`}{' '}
                      </Text>
                    </CardBody>

                    <CardFooter justifyContent={'end'}>
                      <IconButton
                        aria-label="Cart"
                        icon={<DeleteIcon />}
                        variant="solid"
                        colorScheme="orange"
                        size={'xs'}
                        id={p.id}
                        onClick={() => deleteToCart(p.id)}
                      ></IconButton>
                    </CardFooter>
                  </Stack>
                </Card>
              ))}
          </DrawerBody>

          <DrawerFooter pr={3}>
            <VStack>
              <Text>{`Total $${total}`}</Text>
              <Flex>
                <Button
                  variant="outline"
                  colorScheme="orange"
                  mr={3}
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </Button>
                <Button colorScheme="teal">Finalizar Compra</Button>
              </Flex>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
