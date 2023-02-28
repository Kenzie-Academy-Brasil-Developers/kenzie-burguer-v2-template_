import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps {
  labelText: string;
  error?: string | undefined;
  register: UseFormRegisterReturn;
}

const Input = ({ labelText, error, register }: IInputProps) => (
  <fieldset>
    <StyledTextField label={labelText} type='text' {...register} />
    <StyledParagraph fontColor='red'>{error}</StyledParagraph>
  </fieldset>
);
export default Input;
