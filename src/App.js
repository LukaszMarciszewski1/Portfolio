import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './theme/theme'
import data from './data'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
// import Portfolio from './components/Projects/ProjectList'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'
import Portfolio from './components/Projects/ProjectList'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`
const Span = styled.span`
margin: 5px;
padding: 1px 10px 4px;
background-color: #323232;
color: #fff
`

function App() {
  const [theme, setTheme] = useState('dark')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Layout>
          <Header changeTheme={() => themeToggler()} />
          <Hero />
          <Portfolio>
            {data.map((item) => (
              <Project
                theme={theme === 'light' ? lightTheme : darkTheme}
                key={item.index}
                title={item.title}
                description={item.description}
                technologies={item.technologies.map((item, index) => (
                  <Span key={index}>{item.name}</Span>
                ))}
                img={item.img}
              />
            ))}
          </Portfolio>
          <Contact />
        </Layout>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App

{
  /* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
<GlobalStyles />
<StyledApp>
  Hello World
  <button onClick={() => themeToggler()}>Change Theme</button>
</StyledApp>
</ThemeProvider> */
}
