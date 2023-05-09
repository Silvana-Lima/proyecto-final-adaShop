import { Flex, Stack } from '@chakra-ui/react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const AppLayout = ({ children }) => {
  return (
    <Flex flexDirection={'column'} minH={'100vh'}>
      <Header />
      <Stack as="main" p={5} bg={'gray.200'} flex={1}>
        {children}
      </Stack>

      <Footer />
    </Flex>
  );
};
