import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/GlobalStyles'
import { lightTheme, darkTheme } from './theme/theme'


import data from './data'
import useDarkMode from './hooks/useDarkMode'

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
      <GlobalStyles />
        <Layout>
          <Header>
            <ScrollToContact />
            <ToogleButton theme={theme} toggle={themeToggler} />
          </Header>
          <Hero />
          <ProjectList>
            {data.map((item) => (
              <Project
                shadow={themeMode}
                key={item.index}
                title={item.title}
                description={item.description}
                technologies={item.technologies.map((item, index) => (
                  <Span key={index}>{item.name}</Span>
                ))}
                img={item.img}
              />
            ))}
          </ProjectList>
          <Contact />
        </Layout>
    </ThemeProvider>
  )
}

export default App











// import React, { useState } from 'react'
// import styled, { ThemeProvider } from 'styled-components'
// import { lightTheme, darkTheme, GlobalStyles } from './theme/theme'
// import data from './data'

// import useDarkMode from './hooks/useDarkMode'

// import Layout from './components/Layout/Layout'
// import Header from './components/Header/Header'
// import Hero from './components/Hero/Hero'
// import Contact from './components/Contact/Contact'
// import Project from './components/Projects/Project'
// import Portfolio from './components/Projects/ProjectList'
// import Span from './components/Projects/Span'
// import ToogleButton from './components/Header/ToogleButton'

// const StyledApp = styled.div`
//   color: ${(props) => props.theme.fontColor};
// `

// function App() {
//   // const [theme, setTheme] = useState('dark')
//   const [theme, themeToggler] = useDarkMode()

//   // const themeToggler = (checked) => {
//   //   theme === 'light' ? setTheme('dark') : setTheme('light')
//   //   setChecked({ checked })
//   // }
//   console.log(theme)
//   return (
//     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//       <GlobalStyles />
//       <StyledApp>
//         <Layout>
//           <Header>
//             <ToogleButton theme={theme} toggle={themeToggler} />
//           </Header>
//           <Hero />
//           <Portfolio>
//             {data.map((item) => (
//               <Project
//                 shadow={theme === 'light' ? lightTheme : darkTheme}
//                 key={item.index}
//                 title={item.title}
//                 description={item.description}
//                 technologies={item.technologies.map((item, index) => (
//                   <Span key={index}>{item.name}</Span>
//                 ))}
//                 img={item.img}
//               />
//             ))}
//           </Portfolio>
//           <Contact />
//         </Layout>
//       </StyledApp>
//     </ThemeProvider>
//   )
// }

// export default App

