import React from 'react'
import styled from 'styled-components'
import device from '../../utils/breakpoints'

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  row-gap: 100px;
  column-gap: 40px;
  margin-bottom: 80px;
  @media ${device.laptop} {
    column-gap: 30px;
  }
  @media ${device.tablet} {
    row-gap: 50px;
    column-gap: 20px;
    margin-bottom: 50px;
  }
  @media ${device.tabletM} {
    grid-template-columns: 1fr;
  }
  @media ${device.mobile} {
    margin-bottom: 40px;
  }
`

const Portfolio = ({ children }) => {
  return <Container>{children}</Container>
}

export default Portfolio
