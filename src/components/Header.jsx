import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Heading,
  HStack,
  Show,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { DrawerCart } from './DrawerCart';
import { HamburguerMenu } from './HamburguerMenu';

export const Header = () => {
  return (
    <HStack justifyContent={'space-between'} p={5} bg={'#E2D784'}>
      <HStack>
        <Heading as={'h1'} fontSize={['lg', '2xl']} pt={4} mr={4}>
          AdaShop
        </Heading>
        <Show below="sm">
          <HamburguerMenu />
        </Show>

        <Show above="sm">
          <Breadcrumb pt={5}>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to={'/'}>
                Inicio
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to={'/productos'}>
                Productos
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Show>
      </HStack>
      <HStack>
        <Button fontSize={['sm', 'md']} colorScheme="orange">
          Iniciar Sesión
        </Button>
        <DrawerCart />
      </HStack>
    </HStack>
  );
};
