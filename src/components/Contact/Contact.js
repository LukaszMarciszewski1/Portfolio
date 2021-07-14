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

const Contact = ({ github, email, phone, githubTxt, emailTxt, phoneTxt }) => {
  return (
    <Container id='contact'>
      <ContactText>Kontakt</ContactText>
      <LinkWrapper>
        <Link rel='noopener noreferrer' target='_blank' href={github}>
          <FaGithub />
          &nbsp;&nbsp;{githubTxt}
        </Link>
        <Link href={email}>
          <FaEnvelope />
          &nbsp;&nbsp;{emailTxt}
        </Link>
        <Link href={phone}>
          <FaMobileAlt />
          &nbsp;&nbsp;{phoneTxt}
        </Link>
      </LinkWrapper>
    </Container>
  )
}

export default Contact
