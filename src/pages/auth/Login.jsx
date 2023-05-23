import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

import { userContext } from '../../context/UserContext';
import { loginWithEmail, registerUser } from '../../services/auth';

export const Login = ({ isCheckingOut }) => {
  const { handleUser } = useContext(userContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [existingUser, setExistingUser] = useState(true);

  const loginUser = async (data) => {
    const loginUser = await loginWithEmail(data);
    handleUser(loginUser);
    if (isCheckingOut) {
      navigate('/checkout');
    } else {
      navigate('/products');
    }
  };

  const createUser = async (data) => {
    const newUser = await registerUser(data);
    handleUser(newUser);
    if (isCheckingOut) {
      navigate('/checkout');
    } else {
      navigate('/products');
    }
  };

  return (
    <Flex direction={'column'} minH={'80vh'}>
      <Flex mb={10}>
        <Button colorScheme="teal" as={Link} to={'/'}>
          Volver
        </Button>
      </Flex>
      <Container>
        <Heading as={'h3'} fontSize={['xl', '3xl']} mb={6}>
          {existingUser ? 'Iniciar Sesión' : 'Crear Usuario'}
        </Heading>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          onSubmit={
            existingUser ? handleSubmit(loginUser) : handleSubmit(createUser)
          }
        >
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              name="email"
              borderColor={'gray'}
              placeholder="Ingresar email"
              id="email"
              {...register('email', {
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/,
                  message: 'Este email no es válido',
                },
              })}
            />
            <FormErrorMessage>{errors.email?.message} </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input
              type="password"
              name="password"
              borderColor={'gray'}
              placeholder="Ingresar contraseña"
              id="password"
              {...register('password', {
                required: 'Este campo es requerido',
                minLength: {
                  value: 6,
                  message: 'La cantidad mínima de carácteres es 6',
                },
              })}
            />
            <FormErrorMessage>{errors.password?.message} </FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="teal">
            {existingUser ? 'Ingresar' : 'Crear'}
          </Button>

          <Button leftIcon={<FcGoogle />} bg={'gray.400'}>
            Continuar con Google
          </Button>
          <Heading as={'h4'} fontSize={'sm'}>
            {existingUser ? '¿No tienes usuario?' : '¿Ya tienes usuario?'}
          </Heading>
          <Button
            variant={'outline'}
            colorScheme="teal"
            onClick={() => setExistingUser(!existingUser)}
          >
            {existingUser ? 'Regístrate' : 'Iniciar sesión'}
          </Button>
        </form>
      </Container>
    </Flex>
  );
};
