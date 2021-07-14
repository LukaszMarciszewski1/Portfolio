import React from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Container = styled.div`
position: relative;
display: flex;
`

const Link = styled.div`
  opacity: .7;
  padding: 0 10px;
  margin: 0 20px;
  cursor: pointer;
  font-size: 1.04rem;
  vertical-align: middle;
  &:hover{
    opacity: 1;
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
`

const ContactLink = () => {
  return (
    <Container>
    <Link>
      <AnchorLink href='#contact'>
        Kontakt
      </AnchorLink>
    </Link>
    <Line />
    </Container>

  )
}
export default ContactLink