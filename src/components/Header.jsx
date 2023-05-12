import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
  Image,
  Show,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { DrawerCart } from './DrawerCart';
import { HamburguerMenu } from './HamburguerMenu';

export const Header = () => {
  return (
    <HStack justifyContent={'space-between'} p={5} bg={'teal.300'}>
      <HStack>
        <Stack as={Link} to={'/'}>
          <Image src="/AdaShopLogo.png" h={['60px', '100px']} />
        </Stack>
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
              <BreadcrumbLink as={Link} to={'/products'} fontWeight={'bold'}>
                Productos
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Show>
      </HStack>
      <HStack>
        <Button
          fontSize={['sm', 'md']}
          colorScheme="orange"
          as={Link}
          to={'/login'}
        >
          Iniciar Sesión
        </Button>
        <DrawerCart />
      </HStack>
    </HStack>
  );
};
