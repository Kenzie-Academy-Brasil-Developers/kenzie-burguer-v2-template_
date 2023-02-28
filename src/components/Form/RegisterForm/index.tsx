import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { FormRegisterContext } from '../../../Context/FormRegisterContext';

const RegisterForm = () => {
  const { register, handleSubmit, onSubmitFormRegister, errors } =
    useContext(FormRegisterContext);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFormRegister)}>
      <Input
        labelText='Nome'
        error={errors.name?.message}
        register={register('name')}
        type='text'
      />
      <Input
        labelText='Email'
        error={errors.email?.message}
        register={register('email')}
        type='email'
      />
      <Input
        labelText='Senha'
        error={errors.password?.message}
        register={register('password')}
        type='password'
      />
      <Input
        labelText='Confirmar senha'
        error={errors.confirmPassword?.message}
        register={register('confirmPassword')}
        type='password'
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
