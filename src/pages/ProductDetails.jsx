import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { cartContext } from '../context/CartContext';
import { useDataCloud } from '../hooks/useDataCloud';
import { getProductById } from '../services/products';

export const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(cartContext);
  const {
    products: product,
    error,
    loading,
  } = useDataCloud(getProductById(id));
  const { name, description, price, image } = product;

  return (
    <Container maxW={'1200px'}>
      {!error && !loading && (
        <Container maxW={'1200px'}>
          <Heading as={'h3'} fontSize={['xl', '3xl']} mb={8}>
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
              <Text
                textAlign={'end'}
                fontWeight={'bold'}
                fontSize={'2xl'}
                mb={5}
              >
                {`$${price}`}
              </Text>
              <Button colorScheme="orange" onClick={() => addToCart(product)}>
                Añadir al carrito
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      )}
      {loading && (
        <Flex
          justify={'center'}
          align={'center'}
          direction={'column'}
          minH={'300px'}
        >
          <Spinner size="lg" mb={5} />
          <Text fontWeight={'bold'}>Cargando producto</Text>
        </Flex>
      )}
      {error && (
        <Flex
          justify={'center'}
          align={'center'}
          direction={'column'}
          minH={'300px'}
        >
          <Text>Hubo un error al obtener el producto</Text>
        </Flex>
      )}
    </Container>
  );
};
