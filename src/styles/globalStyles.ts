import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -2%;
  }

  body {
    line-height: 1;
  }

  nav ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  a {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    background: transparent;
    color: inherit;
    text-decoration: none;
  }

  abbr[title], dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    margin: 1em 0;
    padding: 0;
  }

  input, select {
    vertical-align: middle;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Avenir, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 100%;
    line-height: 1;

    @media (max-width: 555px) {
      font-size: 75%;
    }
  }
`
