import { Logo } from "../Logo";

import * as S from "./styles";

export function Hero() {
  return (
    <S.HeroWrapper>
      <Logo />
      <strong>Crie salas de Q&amp;A ao vivo</strong>
      <p>
        Tire as dúvidas da sua audiência em tempo real. Crie uma sala e
        compartilhe o código com seus seguidores.
      </p>

      <p>
        Desenvolvido com ❤ por{" "}
        <a href="https://marcelopereira.dev" target="_blank" rel="noreferrer">
          Marcelo Pereira
        </a>{" "}
        durante a NLW/Together.
      </p>
    </S.HeroWrapper>
  );
}
