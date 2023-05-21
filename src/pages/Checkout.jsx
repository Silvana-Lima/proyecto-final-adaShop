import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { CartCard } from '../components/CartProductCard';
import { cartContext } from '../context/CartContext';
import { userContext } from '../context/UserContext';

export const Checkout = () => {
  const { cart, priceTotalCart } = useContext(cartContext);
  const { user } = useContext(userContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sub = (data) => {
    console.log(data);
  };

  return (
    <VStack>
      <Heading as={'h2'} mb={6}>
        Finalizar compra
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} spacing={20} bg={''}>
        <GridItem w={'100%'}>
          {cart &&
            cart.map((product) => (
              <CartCard
                width={{ base: '330px', md: '330px', lg: '500px' }}
                product={product}
                key={product.id}
              />
            ))}
        </GridItem>
        <GridItem w={'100%'}>
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            onSubmit={handleSubmit(sub)}
          >
            <Heading as={'h3'} fontSize={'lg'}>
              Completa tus datos
            </Heading>
            <FormControl isInvalid={errors.name} borderColor={'gray'}>
              <FormLabel htmlFor="name">Nombre</FormLabel>
              <Input
                type="text"
                name="name"
                {...register('name', {
                  required: 'Este campo es requerido',
                })}
              />
              <FormErrorMessage>{errors.name?.message} </FormErrorMessage>
            </FormControl>
            <FormControl borderColor={'gray'}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="text"
                name="email"
                borderColor={'gray'}
                placeholder="Ingresar email"
                id="email"
                value={user && user.email}
                readOnly
              />
            </FormControl>
            <FormControl isInvalid={errors.direction} borderColor={'gray'}>
              <FormLabel htmlFor="direction">Dirección</FormLabel>
              <Input
                type="text"
                name="direction"
                {...register('direction', {
                  required: 'Este campo es requerido',
                })}
              />
              <FormErrorMessage>{errors.direction?.message} </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.tel} borderColor={'gray'}>
              <FormLabel htmlFor="tel">Teléfono</FormLabel>
              <Input
                type="number"
                name="tel"
                {...register('tel', {
                  required: 'Este campo es requerido',
                })}
              />
              <FormErrorMessage>{errors.tel?.message} </FormErrorMessage>
            </FormControl>

            <Text fontSize={'xl'} fontWeight={'bold'} textAlign={'end'}>
              {` Total: $${priceTotalCart} `}
            </Text>

            <Button type="submit" colorScheme="teal">
              Confirmar compra
            </Button>
          </form>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
