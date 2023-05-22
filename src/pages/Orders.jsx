import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
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
  Spinner,
  Stack,
  Tag,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import { CartProductCard } from '../components/CartProductCard';
import { userContext } from '../context/UserContext';
import { getUserOrders } from '../services/orders';

export const Orders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(userContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [order, setOrder] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getUserOrders(user.uid);
        setOrders(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const findOrder = (id) => {
    const orderFound = orders.find((o) => o.id === id);
    setOrder(orderFound);
  };

  return (
    <Stack w={'100%'}>
      <Heading m={5}>Mis pedidos</Heading>
      {error && <Text>Hubo un error...</Text>}
      {loading && (
        <Flex justify={'center'} align={'center'} direction={'column'}>
          <Spinner size="lg" mb={5} />
          <Text fontWeight={'bold'}>Cargando ordenes...</Text>
        </Flex>
      )}
      {!orders.length && (
        <Flex p={5}>
          <Text fontWeight={'bold'}>Todavía no realizaste ningún pedido.</Text>
        </Flex>
      )}
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {orders &&
          orders.map((o) => (
            <Card key={o.id}>
              <CardHeader>
                <Heading size="md" mb={3}>
                  {`Orden: ${o.id}`}
                </Heading>
                <Tag colorScheme="teal">
                  {o.payed ? 'Pago' : 'Pendiente de pago'}
                </Tag>
              </CardHeader>
              <CardBody>
                <UnorderedList>
                  <ListItem>{`Nombre: ${o.customer.name}`}</ListItem>
                  <ListItem>{`Email: ${o.customer.email}`}</ListItem>
                  <ListItem> {`Dirección: ${o.customer.addres}`}</ListItem>
                  <ListItem>{`Teléfono: ${o.customer.tel}`}</ListItem>
                  <ListItem>{`Total: $${o.total}`}</ListItem>
                </UnorderedList>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="teal"
                  onClick={() => onOpen(findOrder(o.id))}
                  id={o.id}
                >
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mi orden</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {order &&
              order.products &&
              order.products.map((p) => (
                <CartProductCard key={p.id} size={'sm'} product={p} />
              ))}
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
