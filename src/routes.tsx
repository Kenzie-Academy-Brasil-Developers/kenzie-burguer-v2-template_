import { Routes, Route } from 'react-router-dom';
import { ShopPageProvider } from './Context/ShopPageContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route
      path='/shop'
      element={
        <ShopPageProvider>
          <ShopPage />
        </ShopPageProvider>
      }
    />
  </Routes>
);
export default Router;
