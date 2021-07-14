import { createGlobalStyle } from 'styled-components'
import device from '../utils/breakpoints'

export const GlobalStyles = createGlobalStyle`
html{
  background: black
}
	body {
    margin: 0;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.2s linear;
		background-color: ${({ theme }) => theme.body};
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
    @media ${device.laptop} {
    font-size: 3rem;
    line-height: 4rem;
    }
    @media ${device.tablet} {
    font-size: 2.7rem;
    line-height: 3.7rem;
    }
    @media ${device.mobile} {
    font-size: 2rem;
    line-height: 2.8rem;
    letter-spacing: 1px;
    }
  }
  h2{
    @media ${device.mobile} {
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: 1px;
    }
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
  margin: 10px 0;
  @media ${device.mobile} {
    margin: 0;
  }
 }

 a{
  text-decoration: none;
  color: inherit;
 }

`
