import styled from "styled-components";

export const RoomTitleWrapper = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    color: #29292e;
  }

  span,
  strong {
    font-size: 14px;
  }

  span {
    margin-left: 16px;
    background-color: ${(props) => props.theme.secundaryBgColor};
    color: #FFFFFF;
    font-weight: 500;

    border-radius: 16px;
    padding: 8px 16px;
  }

  strong {
    margin-left: auto;
    font-weight: 400;
  }

  @media (max-width: 940px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    span {
      margin-left: 0;
    }

    strong {
      display: none;
    }
  }
`;
