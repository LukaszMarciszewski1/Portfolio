import React from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import device from '../../utils/breakpoints'

const Container = styled.div`
  position: relative;
  display: flex;
`

const Link = styled.div`
  opacity: 0.7;
  padding: 0 10px;
  margin: 0 20px;
  cursor: pointer;
  font-size: 1.04rem;
  vertical-align: middle;
  &:hover {
    opacity: 1;
  }
  @media ${device.mobile} {
    margin: 0 15px;
  }
`
const Line = styled.div`
  position: relative;
  margin-right: 30px;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    border-right: 1px solid grey;
  }
  @media ${device.mobile} {
    margin-right: 25px;
  }
`

const ContactLink = () => {
  return (
    <Container>
      <Link>
        <AnchorLink href='#contact'>Kontakt</AnchorLink>
      </Link>
      <Line />
    </Container>
  )
}
export default ContactLink
