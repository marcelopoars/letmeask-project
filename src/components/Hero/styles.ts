import styled from "styled-components";

export const HeroWrapper = styled.section`
  flex: 7;

  background-color: ${props => props.theme.primaryBgColor};
  color: #f8f8f8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 120px 80px;

  img {
    max-width: 220px;
  }

  strong {
    font: 700 36px "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    margin-top: 16px;
    max-width: 448px;
    text-align: center;
  }

  a {
    display: inline-block;
    color: ${props => props.theme.secundaryBgColor};
    margin-top: 48px;
    transition: opacity 0.2s;

    :hover {
      opacity: .9;
    }
  }

  @media (max-width: 940px) {
    display: none;
  }
`;
