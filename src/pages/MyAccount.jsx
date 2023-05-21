import { Heading, Text, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { userContext } from '../context/UserContext';

export const MyAccount = () => {
  const { user } = useContext(userContext);
  return (
    <VStack>
      <Heading>Mi cuenta</Heading>
      <Text>{user.email} </Text>
      <Outlet />
    </VStack>
  );
};
