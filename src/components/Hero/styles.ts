import styled from "styled-components";

export const HeroWrapper = styled.section`
  background-color: ${(props) => props.theme.primaryBgColor};
  color: #f8f8f8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;

  padding: 120px 80px;
  text-align: center;

  img {
    max-width: 180px;
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

    > a {
      display: inline-block;
      color: ${(props) => props.theme.secundaryBgColor};
      margin-top: 48px;
      transition: opacity 0.2s;

      :hover {
        opacity: 0.9;
      }
    }
  }


  @media (max-width: 940px) {
    padding: 36px 24px;

    flex: 3;

    img {
      max-width: 96px;
    }

    strong {
      font-size: 24px;
    }

    p {
      display: none;
    }
  }
`;
