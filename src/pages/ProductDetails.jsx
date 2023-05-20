import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { cartContext } from '../context/CartContext';

export const ProductDetails = ({ allProducts }) => {
  const { id } = useParams();
  const { addToCart } = useContext(cartContext);

  const product = useMemo(
    () => allProducts.find((p) => p.id === id),
    [id, allProducts]
  );

  if (!product) {
    return <div>Cargando...</div>;
  }

  const { name, description, price, image } = product;

  return (
    <Container maxW={'1200px'}>
      <Heading as={'h3'} fontSize={['xl', '3xl']} mb={5}>
        {name}
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={'40px'}>
        <Box>
          <Image src={image} alt="Green double couch with wooden legs" />
        </Box>
        <Box>
          <Heading as={'h5'} fontSize={'ms'} mb={5}>
            Características
          </Heading>
          <Text mb={5}>{description}</Text>
          <Text textAlign={'end'} fontWeight={'bold'} fontSize={'2xl'} mb={5}>
            {`$${price}`}
          </Text>
          <Button colorScheme="orange" onClick={() => addToCart(product)}>
            Añadir al carrito
          </Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
