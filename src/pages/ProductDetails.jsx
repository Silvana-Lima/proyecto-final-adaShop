import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

export const ProductDetails = () => {
  return (
    <Container maxW={'1200px'}>
      <Heading as={'h3'} fontSize={['xl', '3xl']} mb={5}>
        Nombre del Producto
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={'40px'}>
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
          />
        </Box>
        <Box>
          <Heading as={'h5'} fontSize={'ms'} mb={5}>
            Características
          </Heading>
          <Text mb={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dignissimos expedita ipsa natus nostrum soluta
            voluptatum fugiat ad qui fuga cum dolore accusamus ducimus, rem
            consequuntur inventore sit quod similique?
          </Text>
          <Text textAlign={'end'} fontWeight={'bold'} fontSize={'2xl'} mb={5}>
            $15000
          </Text>
          <Button colorScheme="orange">Añadir al carrito</Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
