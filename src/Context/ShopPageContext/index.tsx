import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { IProducts, IShopPageProvider, IShopPageProviderProps } from './types';
import { api } from '../../API/api';
import { toastify } from '../../components/Toastify';

export const ShopPageContext = createContext<IShopPageProvider>(
  {} as IShopPageProvider
);

export const ShopPageProvider = ({ children }: IShopPageProviderProps) => {
  const [modalCart, setModalCart] = useState(false);
  const [products, setProducts] = useState<IProducts[]>([] as IProducts[]);
  const [searchProducts, setSearchProducts] = useState<IProducts[]>(
    [] as IProducts[]
  );
  const [cart, setCart] = useState<IProducts[]>([] as IProducts[]);

  useEffect(() => {
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
        setSearchProducts(response.data);
      } catch (error) {
        if (
          axios.isAxiosError(error) &&
          error.response?.data === 'jwt expired'
        ) {
          toastify(
            'Seu login expirou! Entre novamente para continuar.',
            'warning'
          );
        }
      }
    };
    getProducts();
  }, []);

  const submitSearch: SubmitHandler<FieldValues> = (data) => {
    if (data.search !== '') {
      setProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(data.search.toLowerCase())
        )
      );
    } else {
      setProducts(searchProducts);
    }
  };

  return (
    <ShopPageContext.Provider
      value={{
        modalCart,
        setModalCart,
        products,
        cart,
        setCart,
        setProducts,
        submitSearch,
      }}
    >
      {children}
    </ShopPageContext.Provider>
  );
};
