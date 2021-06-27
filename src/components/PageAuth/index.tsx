import { ReactNode } from "react";

import * as S from './styles'

type PageAuthProps = {
  children: ReactNode;
};

export function PageAuth({ children }: PageAuthProps) {
  return <S.PageAuthWrapper>{children}</S.PageAuthWrapper>;
}
