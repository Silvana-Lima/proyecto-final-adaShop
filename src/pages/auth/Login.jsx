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
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

import { userContext } from '../../context/UserContext';
import {
  loginWithEmail,
  loginWithGoogle,
  registerUser,
} from '../../services/auth';

export const Login = ({ isCheckingOut }) => {
  // Context and navigation
  const { handleUser } = useContext(userContext);
  const navigate = useNavigate();

  // States and functions
  const [error, setError] = useState(false);
  const [existingUser, setExistingUser] = useState(true);
  const [showPassword, setShowPassword] = React.useState(false);

  const toast = useToast();

  // Function to login
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

  //Function to login with Google

  const loginUserWithGoogle = async () => {
    try {
      const userGoogle = await loginWithGoogle();
      handleUser({ email: userGoogle.email, uid: userGoogle.uid });

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

  // Function to create user
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

  // Registration and validation of forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
              borderColor={'teal'}
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
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password"
                type={showPassword ? 'text' : 'password'}
                borderColor={'teal'}
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
              <InputRightElement width="4.5rem">
                <IconButton
                  icon={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  size="sm"
                  fontSize={'20px'}
                  variant="outline"
                  colorScheme="teal"
                  border={'none'}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </InputRightElement>
            </InputGroup>
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

          <Button
            leftIcon={<FcGoogle />}
            bg={'gray.400'}
            onClick={loginUserWithGoogle}
          >
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
