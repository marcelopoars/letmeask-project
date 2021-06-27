import styled from "styled-components";

export const MainWrapper = styled.main`
  margin: 0 auto;
  padding: 0 32px;

  width: 100%;
  max-width: 448px;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  /* flex: 2; */

  // Pega apenas a img dentro de ".main-content"
  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: "Poppins", sans-serif;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background-color: #ffffff;
      border: 1px solid #a8a8b3;
    }

    button {
      margin-top: 16px;
    }

    button,
    input {
      width: 100%;
    }
  }

  p {
    font-size: 14px;
    color: #737380;
    margin-top: 16px;

    a {
      color: #ff9f1c;
      font-weight: 500;
    }
  }

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background-color: #ea4335;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      background-color: #1a73e8;
    }
  }

  .separator {
    font-size: 14px;
    color: #a8a8b3;

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before,
    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background-color: #a8a8b3;
      margin-right: 16px;
    }

    &::after {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  @media (max-width: 940px) {
    margin: 0 auto;
    padding-bottom: 96px;

    h2 {
      margin-top: 0;
    }
  }
`;
