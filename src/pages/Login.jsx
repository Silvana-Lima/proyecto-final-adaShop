import { Container } from '@chakra-ui/react';

import { FormLogin } from '../components/FormLogin';

export const Login = () => {
  return (
    <Container>
      <FormLogin
        title={'Iniciar Sesión'}
        textButtonSubmit={'Ingresar'}
        subtitle={'¿No tienes usuario? '}
        textButton={'Regístrate'}
        toLink={'/Register'}
      />
    </Container>
  );
};
