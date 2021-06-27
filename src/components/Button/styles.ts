import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 0 32px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: ${(props) => props.theme.secundaryBgColor};
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.primaryBgColor};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
