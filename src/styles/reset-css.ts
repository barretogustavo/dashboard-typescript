import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Roboto:wght@400;500;700&display=swap');

  * {
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    color: #fff;
    font-family: 'Roboto';
  }

  @media (max-width: 600px) {
    .custom-svg {
      width: 300px;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }

  b,
  strong {
    font-weight: bold;
  }

  button,
  input,
  select,
  textarea {
    font-size: 1rem;
    font-family: 'Roboto';
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  h6 {
    font-size: 1rem;
    font-weight: bold;
  }

  img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
  }
`}
 
`

export default GlobalStyle
