import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html{
  background: ${({ theme }) => theme.body};
}
	body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.2s linear;
		background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
	}
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  h1{
  font-size: 3.3rem;
  line-height: 4.3rem;
  letter-spacing: 1px;
  }
  h3{
  font-size: 1.6rem;
  line-height: 2rem; 
  }

  h1,h2,h3,h4{
  margin: 0;
 }

 p{
  letter-spacing: 0.03rem;
 }

 a{
  text-decoration: none;
  color: inherit;
 }
`
