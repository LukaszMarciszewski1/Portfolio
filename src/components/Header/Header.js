import React from 'react'
import styled from 'styled-components'

const Name = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 80px;
`

const Theme = styled.div`
  width: 15px;
  height: 15px;
  background-color: grey;
`

const Header = () => {
  return (
    <Name>
      <h2>Cześć, nazywam się Łukasz</h2>
      <Theme />
    </Name>
  )
}

export default Header
