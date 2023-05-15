import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
  Icon,
  Image,
  Show,
  Stack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { userContext } from '../context/UserContext';
import { ButtonMenu } from './ButtonMenu';
import { DrawerCart } from './DrawerCart';

export const Header = () => {
  const { user, handleLogout } = useContext(userContext);

  return (
    <HStack justifyContent={'space-between'} p={5} bg={'teal.300'}>
      {/* <Button onClick={() => console.log(user)} /> */}
      <HStack>
        <Stack as={Link} to={'/'}>
          <Image src="/AdaShopLogo.png" h={['60px', '100px']} />
        </Stack>
        <Show below="sm">
          <ButtonMenu
            icon={<HamburgerIcon />}
            firstItem={'Inicio'}
            secondItem={'Productos'}
            scheme={'teal'}
            variant={'outline'}
            firstTo={'/'}
            secondTo={'/products'}
          />
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
        {!user ? (
          <Button
            fontSize={['sm', 'md']}
            colorScheme="orange"
            as={Link}
            to={'/login'}
          >
            Iniciar Sesión
          </Button>
        ) : (
          <ButtonMenu
            icon={<Icon as={AiOutlineUser} />}
            firstItem={'Mis pedidos'}
            secondItem={'Cerrar sesión'}
            scheme={'orange'}
            variant={'solid'}
            firstTo={'/orders'}
            secondTo={'/'}
            onClick={() => handleLogout()}
          />
        )}
        <DrawerCart />
      </HStack>
    </HStack>
  );
};
