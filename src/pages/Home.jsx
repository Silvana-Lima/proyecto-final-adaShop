import { Container, Heading } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Container
      bg={'#05595B'}
      maxW={['sm', '6xl']}
      h="2xs"
      p={8}
      textAlign={'left'}
      display={'flex'}
      alignItems={'center'}
    >
      <Heading as={'h2'} color={'white'}>
        Proyecto final ADAITW, <br /> un ecommerce para aprender <br /> y
        aplicar tecnologías web.
      </Heading>
    </Container>
  );
};
