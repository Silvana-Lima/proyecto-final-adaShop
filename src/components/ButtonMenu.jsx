import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ButtonMenu = ({
  icon,
  scheme,
  variant,
  firstItem,
  secondItem,
  firstTo,
  secondTo,
  onClick,
}) => {
  return (
    <Menu>
      <IconButton
        as={MenuButton}
        aria-label="Menu"
        icon={icon}
        colorScheme={scheme}
        variant={variant}
      />
      <MenuList>
        <MenuItem as={Link} to={firstTo}>
          {firstItem}
        </MenuItem>
        <MenuItem as={Link} to={secondTo} onClick={onClick}>
          {secondItem}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
