import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset};
  
  :root {
  --color-bg-dark: #f5f5f5;
  --color-bg: #fdfffd;
  --color-grey: #d1d1d1;
  --color-lightgrey: #f5f5f5;
  --color-darkgrey: #666666;
  --color-darkblue: #588195;
  --color-text: #22243b;
  --color-accent: red;
  --color-white: white;
  --color-scrollbar: #aaa7a7;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  accent-color: var(--color-darkblue);
  background: rgb(81, 87, 111);
  background: linear-gradient(
    106deg,
    rgba(81, 87, 111, 1) 0%,
    rgba(60, 61, 69, 1) 100%
  );
}
#root {
  width: 100%;
  height: 60%;
  max-width: 500px;
  background-color: var(--color-bg-dark);
  overflow: hidden;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 5px 5px 21px 4px rgba(0, 0, 0, 0.45);
  box-shadow: 5px 5px 21px 4px rgba(0, 0, 0, 0.45);
}
  * {
    box-sizing: border-box;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  button {
    outline: none;
    border: none;
  }
  ::-webkit-scrollbar {
  width: 0.5rem;
}
::-webkit-scrollbar-track {
  background-color: var(--color-bg-dark);
}
::-webkit-scrollbar-thumb {
  background-color: var(--color-scrollbar);
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-darkblue);
}
 
`;
export default GlobalStyle;