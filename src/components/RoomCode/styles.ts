import styled from "styled-components";

export const RoomCodeWrapper = styled.button`
  height: 40px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.secundaryBgColor};
  overflow: hidden;
  color: #fff;

  display: flex;
  align-items: stretch;

  transition: all 0.1s;

  div {
    background-color: ${(props) => props.theme.secundaryBgColor};
    padding: 0 8px;

    display: flex;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    font-size: 14px;
    font-weight: 400;
  }

  :hover {
    background-color: ${(props) => props.theme.secundaryBgColor};
  }

  :active {
    filter: brightness(0.8);
  }

  @media (max-width: 940px) {
    span {
      display: none;
    }
  }
`;
