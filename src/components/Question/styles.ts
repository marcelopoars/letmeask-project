import styled from "styled-components";

export const QuestionWrapper = styled.div`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid #dddddd;
  padding: 16px 24px;

  & + .question {
    margin-top: 16px;
  }

  &.highlighted {
    border: 1px solid ${(props) => props.theme.secundaryBgColor};
    background-color: #fcf1e3;

    footer .user-info span {
      color: #29292e;
    }
  }

  &.answered {
    background-color: #eeeeee;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .button-icons {
      display: flex;
      gap: 16px;

      button {
        border: 0;
        background-color: transparent;
        cursor: pointer;
        transition: filter 0.2s;

        &.like-button {
          display: flex;
          align-items: flex-end;
          color: #737380;
          gap: 8px;

          &.liked {
            color: ${(props) => props.theme.secundaryBgColor};

            svg path {
              stroke: ${(props) => props.theme.secundaryBgColor};
            }
          }
          :hover {
            filter: brightness(0.8);
          }
        }
      }
    }
  }
`;
