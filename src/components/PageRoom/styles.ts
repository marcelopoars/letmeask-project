import styled from "styled-components";

export const PageRoomWrapper = styled.div`
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;

    form {
      textarea {
        width: 100%;
        padding: 16px;
        border: 0;
        border-radius: 8px;
        background-color: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

        resize: vertical;
        min-height: 130px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
      }
    }

    .question-list {
      margin-top: 32px;
    }
  }

  @media (max-width: 940px) {
    /*  */
  }
`;
