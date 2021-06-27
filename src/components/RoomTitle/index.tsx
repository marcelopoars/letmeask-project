import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";

import * as S from "./styles";

type RoomParams = {
  id: string;
};

export function RoomTitle() {
  const params = useParams<RoomParams>(); // generic - parâmetro da tipagme
  const roomId = params.id;
  const { user } = useAuth();
  const { title, questions } = useRoom(roomId);

  return (
    <S.RoomTitleWrapper>
      <h1>Sala: {title}</h1>
      {questions.length > 0 && <span>{questions.length} perguntas</span>}
      <strong>{user?.email}</strong>
    </S.RoomTitleWrapper>
  );
}
