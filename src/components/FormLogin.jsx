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
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export const FormLogin = ({
  title,
  textButtonSubmit,
  subtitle,
  textButton,
  toLink,
  functionOnsubmit,
}) => {
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
          {title}
        </Heading>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          onSubmit={handleSubmit(functionOnsubmit)}
        >
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="text"
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
            {textButtonSubmit}
          </Button>

          <Button leftIcon={<FcGoogle />} bg={'gray.400'}>
            Continuar con Google
          </Button>
          <Heading as={'h4'} fontSize={'sm'}>
            {subtitle}
          </Heading>
          <Button as={Link} to={toLink} variant={'outline'} colorScheme="teal">
            {textButton}
          </Button>
        </form>
      </Container>
    </Flex>
  );
};
