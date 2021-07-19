import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: white;
        color: black;
        font-size: 1.125rem;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        line-height: 1.5rem;
        font-weight: 400;
    }
    h1 {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: black;
        @media (min-width: 720px) {
          font-size: 2rem;
          line-height: 2rem;
        }
        @media (min-width: 1200px) {
            font-size: 2rem;
            line-height: 2rem;
        }
    }
    h2 {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.25rem;
        color: black;
        @media (min-width: 720px) {
          font-size: 1.70rem;
          line-height: 1.70rem;
        }
        @media (min-width: 1200px) {
            font-size: 1.70rem;
            line-height: 1.70rem;
        }
    }
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        // color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
          outline: 0;
          color: #f25d27;
        }
    }
    .highlighted {
      box-shadow: inset 0 -2.5rem #f1e740;
    }
`

export default GlobalStyle