import { ReactNode } from "react";

import { Logo } from "../Logo";

import * as S from "./styles";

type HeaderProps = {
  children?: ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <S.HeaderWrapper>
      <div className="content">
        <Logo />
        <div>{children}</div>
      </div>
    </S.HeaderWrapper>
  );
}
