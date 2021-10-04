import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: ${theme.font.family};

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${theme.font.content.regular};
    }
  `}

`

export default GlobalStyles
