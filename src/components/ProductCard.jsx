import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { cartContext } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { name, price, id, image } = product;
  const { addToCart } = useContext(cartContext);

  return (
    <Card maxW="xs">
      <CardBody>
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="sm">{name} </Heading>
          <Text color="teal" fontSize="2xl">
            {`$${price}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="ghost"
            colorScheme="teal"
            id={id}
            as={Link}
            to={`/products/${id}`}
          >
            Ver Detalles
          </Button>
          <Button
            variant="solid"
            colorScheme="orange"
            rightIcon={<AiOutlineShoppingCart />}
            id={id}
            value={1}
            onClick={() => addToCart(product)}
          >
            Añadir
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
