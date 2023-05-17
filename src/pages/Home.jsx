import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import { ProductCard } from '../components/ProductCard';

export const Home = ({ allProducts }) => {
  return (
    <>
      <Container
        bg={'#05595B'}
        maxW={['sm', '6xl']}
        h="2xs"
        p={8}
        mb={5}
        textAlign={'left'}
        display={'flex'}
        alignItems={'center'}
      >
        <Heading as={'h1'} color={'white'}>
          Proyecto final ADAITW, <br /> un ecommerce para aprender <br /> y
          aplicar tecnologías web.
        </Heading>
      </Container>
      <Container maxW={'100%'}>
        <Heading as="h2" fontSize={['xl', '3xl']} mb={5} fontStyle={'italic'}>
          Productos destacados
        </Heading>
        <SimpleGrid columns={[1, 3, 3]} spacing={['20px', '10px', '40px']}>
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};
