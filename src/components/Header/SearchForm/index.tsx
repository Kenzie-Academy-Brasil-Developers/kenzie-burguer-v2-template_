import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { MdSearch } from 'react-icons/md';
import { useContext, useState } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { ShopPageContext } from '../../../Context/ShopPageContext';

const SearchForm = () => {
  const { submitSearch } = useContext(ShopPageContext);

  const { register, handleSubmit } = useForm();

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
