import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary-bg-color: #23053A;

        --secundary-bg-color: #FF9F1C;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #F8F8F8;
        color: #29292e;
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button {
        appearance: none;
        cursor: pointer;
        border: 0;
    }

    ul, li {
        padding: 0
    }

    a {
        text-decoration: none;
    }
`;
