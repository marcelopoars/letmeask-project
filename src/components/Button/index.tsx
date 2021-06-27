import { ButtonHTMLAttributes } from "react";

import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean; // atributo opcional
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <S.ButtonWrapper className={`${isOutlined ? "outlined" : ""}`} {...props} />
  );
}
