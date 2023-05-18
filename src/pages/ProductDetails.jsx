import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetails = ({ allProducts }) => {
  const { id } = useParams();

  const product = useMemo(
    () => allProducts.find((p) => p.id === id),
    [id, allProducts]
  );

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <Container maxW={'1200px'}>
      <Heading as={'h3'} fontSize={['xl', '3xl']} mb={5}>
        {product.name}
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={'40px'}>
        <Box>
          <Image
            src={product.image}
            alt="Green double couch with wooden legs"
          />
        </Box>
        <Box>
          <Heading as={'h5'} fontSize={'ms'} mb={5}>
            Características
          </Heading>
          <Text mb={5}>{product.description}</Text>
          <Text textAlign={'end'} fontWeight={'bold'} fontSize={'2xl'} mb={5}>
            {`$${product.price}`}
          </Text>
          <Button colorScheme="orange">Añadir al carrito</Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
