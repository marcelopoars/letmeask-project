import { ReactNode } from "react";
import { UserInfo } from "../UserInfo";

import * as S from "./styles";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <S.QuestionWrapper
      className={`question ${isAnswered ? "answered" : ""} ${
        isHighlighted && !isAnswered ? "highlighted" : ""
      }`}
    >
      <p>{content}</p>
      <footer>
        <UserInfo />
        <div className="button-icons">{children}</div>
      </footer>
    </S.QuestionWrapper>
  );
}
