import React from 'react'
import styled from 'styled-components'
import { BsMoon } from 'react-icons/bs'
import { BsBrightnessHighFill } from 'react-icons/bs'

const Theme = styled.div`
  font-size: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const ToogleButton = ({ theme, toggle }) => {
  return (
    <Theme theme={theme} onClick={toggle}>
      {theme === 'light' ? <BsMoon /> : <BsBrightnessHighFill />}
    </Theme>
  )
}
export default ToogleButton
