import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { MdSearch } from 'react-icons/md';
import { useContext, useState } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { ShopPageContext } from '../../../Context/ShopPageContext';
import { IProducts } from '../../../Context/ShopPageContext/types';

const SearchForm = () => {
  const { products, setProducts } = useContext(ShopPageContext);
  const [newProduct, setNewProduct] = useState<IProducts[]>([] as IProducts[]);

  const { register, handleSubmit } = useForm();

  const submitSearch: SubmitHandler<FieldValues> = (data) => {
    setNewProduct(products);

    const newRenderProduct = newProduct.filter((product) => {
      if (data.search === '') {
        return newProduct;
      }
      return product.name.toLowerCase().includes(data.search.toLowerCase());
    });

    setProducts(newRenderProduct);

    console.log(data);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(submitSearch)}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        {...register('search')}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
