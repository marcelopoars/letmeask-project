import { Link } from "react-router-dom";

import styled from "styled-components";

// import logoImg from "../../assets/images/logo.svg";
import logoImg from "../../assets/images/logo-dica-do-nerd.png";

const LogoWrapper = styled(Link)``;

export function Logo() {
  return (
    <LogoWrapper to="/">
      <img src={logoImg} alt="Logo da aplicação Letmeask" />
    </LogoWrapper>
  );
}
