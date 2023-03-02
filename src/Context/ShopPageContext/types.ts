import { FieldValues, SubmitHandler } from 'react-hook-form';

export interface IShopPageProviderProps {
  children: React.ReactNode;
}

export interface IShopPageProvider {
  modalCart: boolean;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  products: Omit<IProducts[], 'setProducts'>;
  cart: IProducts[];
  setCart: React.Dispatch<React.SetStateAction<IProducts[]>>;
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  submitSearch: SubmitHandler<FieldValues>;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
