import React from 'react'
import styled from 'styled-components'

const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 80px;
`

const Header = ({children}) => {
  return (
    <Name>
      <h2>Cześć, nazywam się Łukasz</h2>
      {children}
    </Name>
  )
}

export default Header
