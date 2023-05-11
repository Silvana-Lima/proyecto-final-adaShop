import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export const FormLogin = ({
  title,
  textButtonSubmit,
  subtitle,
  textButton,
  toLink,
}) => {
  return (
    <Container>
      <FormControl display={'flex'} flexDirection={'column'} gap={4} mt={5}>
        <Heading as={'h3'} fontSize={['xl', '3xl']}>
          {title}
        </Heading>

        <Box>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input
            type="text"
            name="name"
            borderColor={'gray'}
            placeholder="Ingresar nombre"
          />
        </Box>
        <Box>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <Input
            type="password"
            name="password"
            borderColor={'gray'}
            placeholder="Ingresar contraseña"
          />
        </Box>
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
      </FormControl>
    </Container>
  );
};
