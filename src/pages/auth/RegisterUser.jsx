import { Container } from '@chakra-ui/react';

import { FormLogin } from '../../components/FormLogin';

export const RegisterUser = () => {
  return (
    <Container>
      <FormLogin
        title={'Crear Usuario'}
        textButtonSubmit={'Crear'}
        subtitle={'¿Ya tienes usuario?'}
        textButton={'Iniciar Sesión'}
        toLink={'/Login'}
      />
    </Container>
  );
};
