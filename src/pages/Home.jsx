import {
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';

import { ProductCard } from '../components/ProductCard';

export const Home = ({ allProducts, loading }) => {
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
          Productos recientes
        </Heading>
        {loading && (
          <Flex justify={'center'} align={'center'} direction={'column'}>
            <Spinner size="lg" mb={5} />
            <Text fontWeight={'bold'}>Cargando productos</Text>
          </Flex>
        )}
        <SimpleGrid minChildWidth="300px" spacing="20px">
          {!loading &&
            allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {!loading && !allProducts.length && (
            <Text>No se encontraron productos</Text>
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};
