import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  gap: 70px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (max-width: 1100px) {
    max-width: 900px;
    gap: 30px;
  }
  @media screen and (max-width: 600px) {
    max-width: 550px;
    gap: 20px;
  }
`

const Layout = ({ children }) => {
  return <Container>{children}</Container>
}

export default Layout
