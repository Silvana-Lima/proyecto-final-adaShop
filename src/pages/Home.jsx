import {
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { ProductCard } from '../components/ProductCard';
import { SkeletonCard } from '../components/SkeletonCard';
import { getMultipleProducts } from '../services/products';

export const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMultipleProducts('newProduct', true);

        setNewProducts(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoadingProducts(false);
      }
    };

    getData();
  }, []);

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
          Novedades!!
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
            newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {!loadingProducts && !newProducts.length && (
            <Text>No se encontraron productos</Text>
          )}
          {error && <Text>hubo un error al obtener los productos</Text>}
        </SimpleGrid>
      </Container>
    </>
  );
};
