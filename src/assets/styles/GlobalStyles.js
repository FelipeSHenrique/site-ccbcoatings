import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-background);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: var(--font-segoe);
    color: var(--color-dark);
  }
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    --font-segoe: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    --color-background: #F5F5F5;
    --color-background-about: #252628;
    --color-dark: #000000;
    --color-white: #FFFFFF;
    --color-yellow: #EBBF0F;
    --color-red: #E51E21;
    --color-green: #2EA54E;
    --color-grey: #CCCCCC;
    --color-info-text: #747373;
    --color-transparent-weak: rgba(0, 0, 0, .43);
    --color-transparent: rgba(0, 0, 0, .6);
    --color-transparent-footer: rgba(0, 0, 0, .80);
  }

`;
