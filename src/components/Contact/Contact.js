import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import device from '../../utils/breakpoints'

import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  border-top: 1px solid ${colors.borderColor};
  @media ${device.tablet} {
    padding: 50px 0;
  }
  @media ${device.mobile} {
    padding: 40px 0;
  }
`
const ContactText = styled.h3`
  margin-bottom: 50px;
  text-align: center;
  @media ${device.mobile} {
    margin-bottom: 25px;
    font-size: 1.4rem;
  }
`

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media ${device.mobile} {
    flex-direction: column;
  }
`

const Link = styled.a`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin: 10px 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.7;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }
  @media ${device.mobile} {
    margin: 10px 0;
  }
`

const Contact = () => {
  return (
    <Container id='contact'>
      <ContactText>Kontakt</ContactText>
      <LinkWrapper>
        <Link
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/LukaszMarciszewski1'
        >
          <FaGithub />
          &nbsp;&nbsp;Github
        </Link>
        <Link href='mailto: lmarciszewski1@gmail.com'>
          <FaEnvelope />
          &nbsp;&nbsp;lmarciszewski1@gmail.com
        </Link>
        <Link href='tel:504-654-093'>
          <FaMobileAlt />
          &nbsp;&nbsp;504 654 093
        </Link>
      </LinkWrapper>
    </Container>
  )
}

export default Contact
