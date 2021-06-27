import styled from "styled-components";

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.secundaryBgColor};
  }

  span, strong {
      font-weight: 500;
  }

  strong {
    margin-left: 8px;
    color: #29292e;
  }
`;

export const SignIn = styled.span`
  font-size: 14px;
  color: #737380;

  button {
    background-color: transparent;
    border: 0;
    font-size: 14px;
    color: #835afd;
    text-decoration: underline;
    cursor: pointer;
  }
`;
