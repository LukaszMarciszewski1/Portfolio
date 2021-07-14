import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'

import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  border-top: 1px solid ${colors.borderColor};
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 600px) {
  }
`
const ContactText = styled.h3`
margin-bottom: 50px;
text-align: center;

`

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Link = styled.a`
font-size: 18px;
display: flex;
align-items: center;
margin: 10px 30px;
text-overflow: ellipsis;
white-space: nowrap;
opacity: .7;
transition: .2s;
&:hover{
  opacity: 1;
}
`

const Contact = () => {
  return (
    <Container>
      <ContactText>Kontakt</ContactText>
      <LinkWrapper>
      <Link rel="noopener noreferrer" target="_blank" href="https://github.com/LukaszMarciszewski1"><FaGithub />&nbsp;&nbsp;Github</Link>
        <Link href="mailto: lmarciszewski1@gmail.com"><FaEnvelope />&nbsp;&nbsp;lmarciszewski1@gmail.com</Link>
        <Link href="tel:504-654-093"><FaMobileAlt />&nbsp;&nbsp;504 654 093</Link>
      </LinkWrapper>
    </Container>
  )
}

export default Contact
