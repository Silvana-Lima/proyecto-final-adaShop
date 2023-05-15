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

export const ProductCard = ({ product }) => {
  const { name, description, price, id, image } = product;
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
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="orange" id={id}>
            Ver Detalles
          </Button>
          <Button variant="ghost" colorScheme="teal">
            Añadir al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
