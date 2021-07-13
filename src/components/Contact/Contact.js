import React from 'react'
import styled from 'styled-components'

const Container = styled.section`

  @media screen and (max-width: 1100px) {

  }
  @media screen and (max-width: 600px) {

  }
`

const Portfolio = () => {
  return (
    <Container>
      {projectsData.map((item) => (
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