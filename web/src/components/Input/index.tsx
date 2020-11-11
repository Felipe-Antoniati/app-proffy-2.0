import React, { InputHTMLAttributes } from "react";

import { InputBox } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  span: string;
  label?: string;
  idName: string;
  inputType: string;
}

const Input: React.FC<InputProps> = ({
  span,
  label,
  idName,
  inputType,
  ...rest
}) => {
  return (
    <InputBox>
      <label htmlFor={idName}>{label}</label>
      <input type={inputType} id={idName} {...rest} />
      <span>{span}</span>
    </InputBox>
  );
};

export default Input;
