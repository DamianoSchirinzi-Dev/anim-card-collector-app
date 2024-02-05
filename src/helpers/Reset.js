import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

html,body {
  height: 100%;
}

#root {
  height: inherit;
}

body {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #777;
  padding: 3rem;
}`;
