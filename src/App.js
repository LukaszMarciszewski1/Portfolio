import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/GlobalStyles'
import { lightTheme, darkTheme } from './theme/theme'
import useDarkMode from './hooks/useDarkMode'

import { projects, heroData, headerTxt, contactData } from './data/data'

import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'
import ProjectList from './components/Projects/ProjectList'
import Span from './components/Projects/Span'
import ToogleButton from './components/Header/ToogleButton'
import ScrollToContact from './components/Header/LinkToContact'

function App() {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={themeMode}>
      <Layout>
        <GlobalStyles />
        <Header title={headerTxt.title}>
          <ScrollToContact />
          <ToogleButton theme={theme} toggle={themeToggler} />
        </Header>
        <Hero
          title={heroData.title}
          description={heroData.description}
          src={heroData.img}
        />
        <ProjectList>
          {projects.map((item) => (
            <Project
              shadow={themeMode}
              key={item.index}
              img={item.img}
              title={item.title}
              github={item.github}
              live={item.live}
              description={item.description}
              technologies={item.technologies.map((item, index) => (
                <Span key={index}>{item.name}</Span>
              ))}
            />
          ))}
        </ProjectList>
        <Contact
          phoneTxt={contactData.phoneTxt}
          emailTxt={contactData.emailTxt}
          githubTxt={contactData.githubTxt}
          phone={contactData.phone}
          email={contactData.email}
          github={contactData.github}
        />
      </Layout>
    </ThemeProvider>
  )
}

export default App
