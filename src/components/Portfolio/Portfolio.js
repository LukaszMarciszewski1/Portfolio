import React from 'react'
import styled from 'styled-components'

import Card from './Card'

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 70px;
  column-gap: 40px;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const Portfolio = () => {
  return (
    <Container>
      <Card
        time={'lis 2020'}
        title={'Strona internetowa PTVS'}
        description={
          'Aplikacja do obliczania cen bazowych dla produktów poligraficznych'
        }
        technologies={'Technologie: React, Material-UI, Node, Express, Mongo DB'}
        img='/img/ptvs.webp'
      />
      <Card
        time={'lis 2020'}
        title={'Kalkulator druku cyfrowego'}
        description={
          'Aplikacja do obliczania cen bazowych dla produktów poligraficznych.'
        }
        technologies={'HTML, CSS, JavaScript, Webpack'}
        img='/img/kalkulator.webp'
      />
      <Card
        time={'lis 2020'}
        title={'Kalkulator druku cyfrowego'}
        description={
          'Aplikacja do obliczania cen bazowych dla produktów poligraficznych'
        }
        technologies={'HTML, CSS, JavaScript, Webpack'}
        img='/img/RML.webp'
      />
      <Card
        time={'lis 2020'}
        title={'Strona internetowa Olejnik'}
        description={
          'Aplikacja do obliczania cen bazowych dla produktów poligraficznych'
        }
        technologies={'HTML, CSS, JavaScript, Webpack'}
        img='/img/olejnik.webp'
      />
    </Container>
  )
}

export default Portfolio
