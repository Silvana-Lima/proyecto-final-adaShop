import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <HStack justifyContent={'space-between'} p={5}>
      <HStack>
        <Heading as={'h1'} fontSize={'2xl'} pt={4} mr={5}>
          AdaShop
        </Heading>
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
      </HStack>
      <HStack>
        <Button>Iniciar Sesión</Button>
        <IconButton
          aria-label="Cart"
          icon={<AiOutlineShoppingCart />}
        ></IconButton>
      </HStack>
    </HStack>
  );
};
