import React from 'react'
import styled from 'styled-components'
import data from '../../data'
import Card from './Project'

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  /* grid-auto-flow: dense; */
  row-gap: 100px;
  column-gap: 35px;
  @media screen and (max-width: 1100px) {
    row-gap: 50px;
    column-gap: 20px;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
const Span = styled.span`
margin: 5px;
padding: 1px 10px 4px;
background-color: #323232;
`

const Portfolio = () => {
  return (
    <Container>
      {data.map((item) => (
        <Card
          key={item.index}
          title={item.title}
          description={
            item.description
          }
          technologies={item.technologies.map((item, index) => <Span key={index}>{item.name}</Span>)}
          img={item.img}
        />
      ))}
    </Container>
  )
}

export default Portfolio