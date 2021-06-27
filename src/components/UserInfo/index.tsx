import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import * as S from './styles'

export function UserInfo() {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  async function signIn() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  return (
    <>
      {user ? (
        <S.UserInfoWrapper>
          <img src={user.avatar} alt={user.name} />
          <strong>{user.name}</strong>
        </S.UserInfoWrapper>
      ) : (
        <S.SignIn>
          Para enviar uma pergunta,{" "}
          <button onClick={signIn}>faça seu login</button>
        </S.SignIn>
      )}
    </>
  );
}
