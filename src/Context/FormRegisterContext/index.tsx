import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  IFormRegisterContext,
  IFormRegisterProviderProps,
  ISubmitRegisterForm,
} from './types';
import { api } from '../../API/api';

const registerSchema = yup.object({
  name: yup.string().required('Nome obrigatório!'),
  email: yup
    .string()
    .email('Deve ser um email valido!')
    .required('Email obrigatório!'),
  password: yup
    .string()
    .required('Senha obrigatória!')
    .matches(/.{6,}/, 'A senha deve conter no minimo 8 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('Confirmação de senha obrigartória'),
});

export const FormRegisterContext = createContext<IFormRegisterContext>(
  {} as IFormRegisterContext
);

export const FormRegisterProvider = ({
  children,
}: IFormRegisterProviderProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitRegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  const onSubmitFormRegister: SubmitHandler<ISubmitRegisterForm> = async (
    data
  ) => {
    const sendData = {
      email: data.email,
      password: data.password,
      name: data.name,
    };
    try {
      await api.post('/users', sendData);
      navigate('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <FormRegisterContext.Provider
      value={{ register, handleSubmit, errors, onSubmitFormRegister }}
    >
      {children}
    </FormRegisterContext.Provider>
  );
};
