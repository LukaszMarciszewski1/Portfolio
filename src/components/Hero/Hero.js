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
  font-size: 15px;
  color: #9e9e9e;
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

const Hero = () => {
  return (
    <Container>
      <h1>Zapraszam Cię do obejrzenia moich projektów </h1>
      <About>
        <Img src='/img/user.svg' alt="avatar"/>
        <p>
          Jestem Junior Frontend Developerem with React and Vue basics and some
          cool personal projects..
        </p>
      </About>
    </Container>
  )
}

export default Hero
