import { useContext } from 'react';
import { FormLoginContext } from '../../../Context/FormLoginContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const { register, handleSubmit, onSubmitFormLogin, errors } =
    useContext(FormLoginContext);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFormLogin)}>
      <Input
        labelText='Email'
        error={errors.email?.message}
        register={register('email')}
      />
      <Input
        labelText='Senha'
        error={errors.password?.message}
        register={register('password')}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
