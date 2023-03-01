import { Navigate, Outlet } from 'react-router-dom';

export const RegisterPageProtctRoute = () => {
  const localToken = localStorage.getItem('@TOKEN');

  return localToken ? <Navigate to='/shop' /> : <Outlet />;
};
