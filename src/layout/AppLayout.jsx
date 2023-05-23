import { Flex, Image, Spinner, Stack } from '@chakra-ui/react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { userContext } from '../context/UserContext';

export const AppLayout = ({ handleIsCheckingOut }) => {
  const { loadingUser } = useContext(userContext);
  return (
    <Flex flexDirection={'column'} minH={'100vh'}>
      {loadingUser && (
        <Flex
          justify={'center'}
          align={'center'}
          direction={'column'}
          minH={'100vh'}
        >
          <Spinner size="lg" mb={5} />
          <Image src="/AdaShopLogo.png" h={['60px', '100px']} />
        </Flex>
      )}
      {!loadingUser && (
        <Flex flexDirection={'column'} minH={'100vh'}>
          <Header handleIsCheckingOut={handleIsCheckingOut} />
          <Stack as="main" p={5} bg={'gray.200'} flex={1}>
            <Outlet />
          </Stack>
          <Footer />{' '}
        </Flex>
      )}
    </Flex>
  );
};
