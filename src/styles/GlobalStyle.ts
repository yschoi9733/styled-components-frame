import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  a {
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: none;
  }

  textarea {
    outline: none;
  }

 html, body{
  overflow-x: hidden;
  color: black;
 }
`;

export default GlobalStyle;
