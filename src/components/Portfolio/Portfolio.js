import React from 'react'
import styled from 'styled-components'

import Card from './Card'

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const Portfolio = () => {
  return (
    <Container>
      <Card
        time={'lis 2020'}
        title={'Kalkulator druku cyfrowego'}
        description={
          'Aplikacja do obliczania cen bazowych dla produktów poligraficznych z opcją dodawania listy dostawców i notatek zapisywanych w localstorage.'
        }
        technologies={'HTML, CSS, JavaScript, Webpack'}
        background='#212121'
      />
      <Card
        time={'lis 2020'}
        title={'Kalkulator druku cyfrowego'}
        description={
          'Aplikacja do obliczania cen bazowych dla produktów poligraficznych z opcją dodawania listy dostawców i wprowadzania notatek zapisywanych w localstorage.'
        }
        technologies={'HTML, CSS, JavaScript, Webpack'}
        background='#212121'
      />
      <Card
        time={'lis 2020'}
        title={'Kalkulator druku cyfrowego'}
        description={
          'Aplikacja do obliczania cen bazowych dla produktów poligraficznych z opcją dodawania listy dostawców i wprowadzania notatek zapisywanych w localstorage.'
        }
        technologies={'HTML, CSS, JavaScript, Webpack'}
        background='#212121'
      />
      <Card
        time={'lis 2020'}
        title={'Kalkulator druku cyfrowego'}
        description={
          'Aplikacja do obliczania cen bazowych dla produktów poligraficznych z opcją dodawania listy dostawców i wprowadzania notatek zapisywanych w localstorage.'
        }
        technologies={'HTML, CSS, JavaScript, Webpack'}
        background='#212121'
      />
    </Container>
  )
}

export default Portfolio
