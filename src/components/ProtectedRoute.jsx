import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { userContext } from '../context/UserContext';

export const ProtectedRoute = () => {
  const { user } = useContext(userContext);

  if (!user) {
    return <Navigate to={'/login'} />;
  }

  return <Outlet />;
};
