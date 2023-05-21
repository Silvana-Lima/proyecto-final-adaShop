import { Flex, Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const AppLayout = ({ handleIsCheckingOut }) => {
  return (
    <Flex flexDirection={'column'} minH={'100vh'}>
      <Header handleIsCheckingOut={handleIsCheckingOut} />
      <Stack as="main" p={5} bg={'gray.200'} flex={1}>
        <Outlet />
      </Stack>

      <Footer />
    </Flex>
  );
};
