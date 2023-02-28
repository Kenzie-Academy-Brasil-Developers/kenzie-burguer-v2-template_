import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface IFormLoginContext {
  register: UseFormRegister<ISubmitLoginForm>;
  handleSubmit: UseFormHandleSubmit<ISubmitLoginForm>;
  onSubmitFormLogin: (data: ISubmitLoginForm) => void;
  errors: FieldErrors<ISubmitLoginForm>;
}

export interface IFormLoginProviderProps {
  children: React.ReactNode;
}

export interface ISubmitLoginForm {
  email: string;
  password: string;
}

export interface IApiResponseLogin {
  accessToken: string;
  user: {
    id: string;
    email: string;
  };
}
