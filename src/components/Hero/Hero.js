import React from 'react'
import styled from 'styled-components'
import device from '../../utils/breakpoints'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 600px;
`
const About = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    margin-top: 40px;
  }
  @media ${device.mobile} {
    margin-top: 30px;
  }
`
const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 30px;
  @media ${device.mobile} {
    margin-right: 20px;
  }
`

const Text = styled.p`
  font-size: 15px;
  opacity: 0.8;
  line-height: 1.5rem;
  @media ${device.mobile} {
    margin: 5px 0 3px;
    /* font-size: 14px; */
  }
`

const Hero = ({ title, description, src }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <About>
        <Img src={src} alt='avatar' />
        <Text>{description}</Text>
      </About>
    </Container>
  )
}

export default Hero
