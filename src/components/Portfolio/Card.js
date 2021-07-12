import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 400px;
  /* background-color: #212121; */
  background-color: ${props => props.background};
  padding: 30px;
  overflow: hidden;
`
const Time = styled.h4`
  font-weight: lighter;
  text-align: right;
`

const Title = styled.h3`
  font-size: 1.6rem;
`

const Description = styled.p`
font-weight: lighter;
line-height: 1.5rem;
max-width: 90%;
letter-spacing: .1rem;
margin-bottom: 50px;
`
const Technologies = styled.h4`
padding: 10px 5px;
font-weight: lighter;
border-top: 1px solid grey;
border-bottom: 1px solid grey;
max-width: 70%;
display: inline-block;
`
const ImageContainer = styled.div`
width: 400px;
height: 400px;
background-color: black;
position: absolute;
right: 0;
bottom: 0;
border-radius: 50%;
transform: translate(50%, 50%);
background-image: url('/img/RML.png');
background-position: center;
background-size: cover;
`

const Card = ({time, title, description, technologies, background}) => {
  return (
    <Container
    background={background}
    >
      <Time>{time}</Time>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Technologies>{technologies}</Technologies>
      <ImageContainer/>
    </Container>
  )
}

export default Card
