import { DeleteIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';

import { cartContext } from '../context/CartContext';

export const CartCard = ({ size, width, product }) => {
  const { deleteToCart } = useContext(cartContext);
  const { name, price, image, id, quantity } = product;
  return (
    <Card
      direction={'row'}
      overflow="hidden"
      variant="outline"
      size={size}
      w={width}
      p={1}
      justifyContent={'space-around'}
      mb={3}
    >
      <Image objectFit="cover" maxW={'50%'} src={image} alt={name} />

      <Stack>
        <CardBody p={2}>
          <Heading size="sm">{name}</Heading>

          <Text>
            {`Precio x u.: $${price}`}
            <br /> {`Cantidad: ${quantity}`}{' '}
          </Text>
        </CardBody>

        <CardFooter justifyContent={'end'}>
          <IconButton
            aria-label="Cart"
            icon={<DeleteIcon />}
            variant="solid"
            colorScheme="orange"
            size={'xs'}
            id={id}
            onClick={() => deleteToCart(id)}
          ></IconButton>
        </CardFooter>
      </Stack>
    </Card>
  );
};
