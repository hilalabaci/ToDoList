import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e4e9fd;
    background-image: -webkit-linear-gradient(65deg, #d5b4b4 50%, #f5ebeb 50%);
    font-family: "helvetica neue";
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 425px) {
      display: block;
    }
  }

  html, body, body>div{
    margin: 0;
  }
`;
