import { Button, Image, Link, Text, VStack } from '@chakra-ui/react';
import { Link as LinkReact } from 'react-router-dom';

export const Error404 = () => {
  return (
    <VStack flex={1} justifyContent={'center'}>
      <Image
        src="../public/robot.svg"
        alt="Error 404"
        boxSize={['200px', '300px']}
      />
      <Text>Esta página no existe.</Text>
      <Button as={LinkReact} to={'/'} colorScheme="orange">
        Volver al inicio
      </Button>
      <Link
        href="https://storyset.com/internet"
        target="_blank"
        rel="noreferrer"
        fontSize={'2xs'}
      >
        Internet illustrations by Storyset
      </Link>
    </VStack>
  );
};
