import { Navigate, Outlet } from 'react-router-dom';

export const ShopPageProtectProtectRoute = () => {
  const localToken = localStorage.getItem('@TOKEN');

  return localToken ? <Outlet /> : <Navigate to='/' />;
};
