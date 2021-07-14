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
  padding: 0 40px;
  @media ${device.tablet} {
    max-width: 1000px;
    padding: 0 30px;
    gap: 40px;
  }
  @media ${device.mobile} {
    max-width: 550px;
    gap: 30px;
    padding: 0 20px;
  }
`

const Layout = ({ children }) => {
  return <Container>{children}</Container>
}

export default Layout
