import styled from "styled-components";

const appStyles = styled.div`
  --app-width: 500px;
  --brown: #703B09;
  --text-color: #444444;
  
  max-width: var(--app-width);
  min-width: fit-content;
  margin: auto;
  box-sizing: content-box;
  
  
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  @media (min-width: 500px) {
    border: 2px solid var(--brown);
  }
`;

export default appStyles;
