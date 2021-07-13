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

const Theme = styled.button`
padding: 5px 20px;
`

const Header = ({changeTheme}) => {
  return (
    <Name>
      <h2>Cześć, nazywam się Łukasz</h2>
      <Theme onClick={changeTheme}>change theme</Theme>
    </Name>
  )
}

export default Header
