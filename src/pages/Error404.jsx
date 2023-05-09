import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Error404 = () => {
  return (
    <VStack flex={1} justifyContent={'center'}>
      <Heading as={'h3'}>Error 404</Heading>
      <Text>Esta página no existe.</Text>
      <Button as={Link} to={'/'}>
        Volver al inicio
      </Button>
    </VStack>
  );
};
