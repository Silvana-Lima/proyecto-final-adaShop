import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormLogin } from '../../components/FormLogin';
import { userContext } from '../../context/UserContext';
import { registerUser } from '../../services/auth';

export const RegisterUser = () => {
  const { user, handleUser } = useContext(userContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newUser = await registerUser(data);
    handleUser(newUser);
    console.log(newUser);
    navigate('/products');
  };

  console.log(user);
  return (
    <FormLogin
      title={'Crear Usuario'}
      textButtonSubmit={'Crear'}
      subtitle={'¿Ya tienes usuario?'}
      textButton={'Iniciar Sesión'}
      toLink={'/Login'}
      functionOnsubmit={onSubmit}
    />
  );
};
