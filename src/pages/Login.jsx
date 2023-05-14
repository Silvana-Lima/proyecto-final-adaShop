import { Container } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormLogin } from '../components/FormLogin';
import { userContext } from '../context/UserContext';
import { loginWithEmail } from '../services/auth';

export const Login = () => {
  const { handleUser } = useContext(userContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const loginUser = await loginWithEmail(data);
    handleUser(loginUser.user.email);

    navigate('/products');
  };
  return (
    <Container>
      <FormLogin
        title={'Iniciar Sesión'}
        textButtonSubmit={'Ingresar'}
        subtitle={'¿No tienes usuario? '}
        textButton={'Regístrate'}
        toLink={'/Register'}
        functionOnsubmit={onSubmit}
      />
    </Container>
  );
};
