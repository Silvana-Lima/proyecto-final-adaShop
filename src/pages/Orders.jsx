import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Tag,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';

import { CartProductCard } from '../components/CartProductCard';

export const Orders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack w={'100%'}>
      <Heading m={5}>Mis pedidos</Heading>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Heading size="md" mb={3}>
              Orden: 1564213
            </Heading>
            <Tag colorScheme="teal">Pendiente de pago</Tag>
          </CardHeader>
          <CardBody>
            <UnorderedList>
              <ListItem>Nombre: silvana</ListItem>
              <ListItem>Email: sil@gmail.com</ListItem>
              <ListItem>Dirección: fsdfdsf 123</ListItem>
              <ListItem>Teléfono: 1145214521</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button colorScheme="teal" onClick={onOpen}>
              Ver detalles
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mi orden</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CartProductCard
              size={'sm'}
              product={{
                id: '0OoT7BO3O',
                name: 'Producto 1',
                description: 'Este es el producto 1',
                price: 10.99,
                stock: 5,
                image:
                  'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                categories: ['Electrónica', 'Accesorios'],
                quantity: 2,
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};
