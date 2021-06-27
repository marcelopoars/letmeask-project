import { ReactNode } from "react";

import * as S from "./styles";

type MainProps = { children: ReactNode };

export function Main({ children }: MainProps) {
  return <S.MainWrapper>{children}</S.MainWrapper>;
}
