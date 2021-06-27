import { ReactNode } from "react";

import * as S from './styles'

type PageRoomProps = {
  children: ReactNode;
};

export function PageRoom({ children }: PageRoomProps) {
  return <S.PageRoomWrapper>{children}</S.PageRoomWrapper>;
}
