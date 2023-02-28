import { createContext, useState } from 'react';
import { IProducts, IShopPageProvider, IShopPageProviderProps } from './types';
import { api } from '../../API/api';

export const ShopPageContext = createContext<IShopPageProvider>(
  {} as IShopPageProvider
);

export const ShopPageProvider = ({ children }: IShopPageProviderProps) => {
  const [modalCart, setModalCart] = useState(false);
  const [products, setProducts] = useState<IProducts[]>([] as IProducts[]);
  const [cart, setCart] = useState<IProducts[]>([] as IProducts[]);

  const getProducts = async () => {
    const token = localStorage.getItem('@TOKEN');
    try {
      const response = await api.get<Omit<IProducts[], 'setProducts'>>(
        '/products',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };
  getProducts();

  return (
    <ShopPageContext.Provider
      value={{ modalCart, setModalCart, products, cart, setCart }}
    >
      {children}
    </ShopPageContext.Provider>
  );
};
