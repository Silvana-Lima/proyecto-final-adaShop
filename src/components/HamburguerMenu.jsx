import { HamburgerIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const HamburguerMenu = () => {
  return (
    <Menu>
      <IconButton
        as={MenuButton}
        aria-label="Menu"
        icon={<HamburgerIcon />}
        colorScheme="teal"
        variant="outline"
      />
      <MenuList>
        <MenuItem as={Link} to={'/'}>
          Inicio
        </MenuItem>
        <MenuItem as={Link} to={'/productos'}>
          Productos
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
