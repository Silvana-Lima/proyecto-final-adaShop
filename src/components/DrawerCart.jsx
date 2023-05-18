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
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const DrawerCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
            <Card
              direction={'row'}
              overflow="hidden"
              variant="outline"
              size={'sm'}
              p={1}
              justifyContent={'space-around'}
            >
              <Image
                objectFit="cover"
                maxW={'50%'}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody p={2}>
                  <Heading size="sm">Producto</Heading>

                  <Text>
                    Precio: $100 <br /> Cantidad: 1{' '}
                  </Text>
                </CardBody>

                <CardFooter justifyContent={'end'}>
                  <IconButton
                    aria-label="Cart"
                    icon={<DeleteIcon />}
                    variant="solid"
                    colorScheme="orange"
                    size={'xs'}
                  ></IconButton>
                </CardFooter>
              </Stack>
            </Card>
          </DrawerBody>

          <DrawerFooter pr={3}>
            <VStack>
              <Text>Total $1000</Text>
              <Flex>
                <Button
                  variant="outline"
                  colorScheme="orange"
                  mr={3}
                  onClick={onClose}
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
