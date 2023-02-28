import { createContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import {
  IApiResponseLogin,
  IFormLoginContext,
  IFormLoginProviderProps,
  ISubmitLoginForm,
} from './types';
import { api } from '../../API/api';

const loginSchema = yup.object({
  email: yup
    .string()
    .email('Deve ser um email valido!')
    .required('Email é obrigatório!'),
  password: yup.string().required('Senha obrigatória!'),
});

export const FormLoginContext = createContext<IFormLoginContext>(
  {} as IFormLoginContext
);

export const FormLoginProvider = ({ children }: IFormLoginProviderProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitLoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmitFormLogin: SubmitHandler<ISubmitLoginForm> = async (data) => {
    try {
      const response = await api.post<IApiResponseLogin>('/login', data);

      localStorage.setItem('@TOKEN', response.data.accessToken);
      localStorage.setItem('@USER', JSON.stringify(response.data.user));
      navigate('/shop');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <FormLoginContext.Provider
      value={{ register, handleSubmit, onSubmitFormLogin, errors }}
    >
      {children}
    </FormLoginContext.Provider>
  );
};
