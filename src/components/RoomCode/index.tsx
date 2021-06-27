import copyImg from "../../assets/images/copy.svg";

import * as S from './styles'

type RoomCodeProps = {
  code: string;
};

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <S.RoomCodeWrapper onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Copiar código da sala</span>
    </S.RoomCodeWrapper>
  );
}
