import { createGlobalStyle } from "styled-components";


const StyleGlobal = createGlobalStyle`
  :root {
    --azul-button: #319795;

    --fundo: #fafafa;
    --fundo-navbar: #4b58a4;

    --texto-preto: ##2d3748;
    --texto-branco: #fbfafc;

    --verde: #3bb54a;
    --vermelho:#e53e3e;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1088px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: var(--fundo);
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  p {
    font-weight: 300;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 8.6;
    cursor: not-allowed;
  }
`
export default StyleGlobal