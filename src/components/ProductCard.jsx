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
  useToast,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { cartContext } from '../context/CartContext';
import { setLocalStorage } from '../utils/localStorage';

export const ProductCard = ({ product }) => {
  const { name, description, price, id, image } = product;
  const { cart, addToCart } = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();

  const addProductToCart = () => {
    setQuantity((prev) => prev + 1);

    const productInTheCart = cart.find((p) => p.id === product.id);

    if (productInTheCart) {
      productInTheCart.quantity = productInTheCart.quantity + 1;
      setLocalStorage('cart', cart);
    } else {
      addToCart({
        ...product,
        quantity,
      });
    }
    toast({
      title: 'Producto agregado al carrito',
      colorScheme: 'teal',
      duration: 2000,
      isClosable: true,
    });
    console.log(cart);
  };

  return (
    <Card maxW="xs">
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name} </Heading>
          <Text>{description}</Text>
          <Text color="teal" fontSize="2xl">
            {`$${price}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="orange"
            id={id}
            as={Link}
            to={`/products/${id}`}
          >
            Ver Detalles
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            id={id}
            value={1}
            onClick={addProductToCart}
          >
            Añadir al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
