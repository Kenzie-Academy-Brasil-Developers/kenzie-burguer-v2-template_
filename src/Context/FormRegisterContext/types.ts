import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface IFormRegisterContext {
  register: UseFormRegister<ISubmitRegisterForm>;
  handleSubmit: UseFormHandleSubmit<ISubmitRegisterForm>;
  errors: FieldErrors<ISubmitRegisterForm>;
  onSubmitFormRegister: (data: ISubmitRegisterForm) => void;
}

export interface ISubmitRegisterForm {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface IFormRegisterProviderProps {
  children: React.ReactNode;
}
