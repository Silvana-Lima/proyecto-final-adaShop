import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

import { userContext } from '../../context/UserContext';
import { loginWithEmail, registerUser } from '../../services/auth';

export const Login = ({ isCheckingOut }) => {
  const { handleUser } = useContext(userContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [existingUser, setExistingUser] = useState(true);
  const toast = useToast();

  const loginUser = async (data) => {
    setError(false);
    try {
      const user = await loginWithEmail(data);
      handleUser(user);

      if (isCheckingOut) {
        navigate('/checkout');
      } else {
        navigate('/products');
      }
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const createUser = async (data) => {
    try {
      setError(false);
      const newUser = await registerUser(data);
      handleUser(newUser);
      toast({
        title: 'Cuenta creada con éxito',
        colorScheme: 'teal',
        duration: 2000,
        isClosable: true,
      });
      if (isCheckingOut) {
        navigate('/checkout');
      } else {
        navigate('/products');
      }
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
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
          {error && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
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
