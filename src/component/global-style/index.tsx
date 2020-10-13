import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face { font-family: 'BMEULJIRO'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff') format('woff'); font-weight: normal; font-style: normal; }
  * {
    font-family: "BMEULJIRO", "sans-serif";
    font-display:'block';
    box-sizing : border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size : 10px;
    margin : 0;
  }
  
  body {
    user-select : none;
    background-color: #f6f9fc;
    margin : 0;
    height: 100vh;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
