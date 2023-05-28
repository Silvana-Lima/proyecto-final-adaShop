import {
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import { ProductCard } from '../components/ProductCard';
import { SkeletonCard } from '../components/SkeletonCard';

export const Home = ({ allProducts, loadingProducts }) => {
  return (
    <>
      <Container
        bg={'#05595B'}
        maxW={['sm', '6xl']}
        p={8}
        mb={5}
        textAlign={'left'}
        alignItems={'center'}
      >
        <Heading as={'h1'} color={'white'} mb={5}>
          Proyecto final ADAITW, un ecommerce para aprender y aplicar
          tecnologías web.
        </Heading>
        <Button
          fontSize={['sm', 'md']}
          colorScheme="orange"
          as={Link}
          href="https://adaitw.org/"
          isExternal
        >
          Ver más
        </Button>
      </Container>
      <Container maxW={'100%'}>
        <Heading as="h2" fontSize={['xl', '3xl']} mb={5} fontStyle={'italic'}>
          Productos recientes
        </Heading>
        {loadingProducts && (
          <SimpleGrid
            minChildWidth="270px"
            spacing="20px"
            justifyItems={'center'}
          >
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </SimpleGrid>
        )}
        <SimpleGrid
          minChildWidth="270px"
          spacing="20px"
          justifyItems={'center'}
        >
          {!loadingProducts &&
            allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {!loadingProducts && !allProducts.length && (
            <Text>No se encontraron productos</Text>
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};
