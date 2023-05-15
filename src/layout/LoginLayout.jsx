import { Flex, Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';

export const LoginLayout = () => {
  return (
    <Flex flexDirection={'column'} minH={'100vh'}>
      <Stack as="main" p={5} bg={'gray.200'} flex={1}>
        <Outlet />
      </Stack>

      <Footer />
    </Flex>
  );
};
