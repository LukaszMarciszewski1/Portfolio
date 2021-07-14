import React from 'react'
import styled from 'styled-components'
import device from '../../utils/breakpoints'

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  gap: 70px;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 30px;
  @media ${device.tablet} {
    max-width: 900px;
    gap: 30px;
  }
  @media ${device.mobile} {
    max-width: 550px;
    gap: 20px;
  }
`

// @media ${device.laptop} { 
//   max-width: 800px;
// }

const Layout = ({ children }) => {
  return <Container>{children}</Container>
}

export default Layout
