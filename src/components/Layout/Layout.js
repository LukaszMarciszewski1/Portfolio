import React from 'react'
import styled from 'styled-components'
import device from '../../utils/breakpoints'

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  gap: 70px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
  @media ${device.tablet} {
    max-width: 1000px;
    gap: 40px;
  }
  @media ${device.mobile} {
    max-width: 550px;
    gap: 20px;
    padding: 0 20px;
  }
`

// @media ${device.laptop} { 
//   max-width: 800px;
// }

const Layout = ({ children }) => {
  return <Container>{children}</Container>
}

export default Layout
