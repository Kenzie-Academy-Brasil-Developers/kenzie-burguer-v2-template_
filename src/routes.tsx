import { Routes, Route } from 'react-router-dom';
import { RegisterPageProtctRoute } from './components/ProtectRoutes/RegisterPageProtectRoute';
import { ShopPageProtectProtectRoute } from './components/ProtectRoutes/ShopPageProtectRoute';
import { ShopPageProvider } from './Context/ShopPageContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => (
  <Routes>
    <Route path='/' element={<RegisterPageProtctRoute />}>
      <Route index element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Route>

    <Route path='/shop' element={<ShopPageProtectProtectRoute />}>
      <Route
        index
        element={
          <ShopPageProvider>
            <ShopPage />
          </ShopPageProvider>
        }
      />
    </Route>
  </Routes>
);
export default Router;
