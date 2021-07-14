import React from 'react'
import styled from 'styled-components'
import device from '../../utils/breakpoints'

const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 80px;
  @media ${device.laptopLg} {
    padding-top: 40px;
  }
`

const ToolsWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Header = ({ children }) => {
  return (
    <Name>
      <h2>Cześć, nazywam się Łukasz</h2>
      <ToolsWrapper>{children}</ToolsWrapper>
    </Name>
  )
}

export default Header
