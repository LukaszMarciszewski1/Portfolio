import React, { useState } from 'react'
import styled from 'styled-components'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Container = styled.section`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  opacity:.9;
  transition: .2s;
  &:hover{
    opacity: 1;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`

const Time = styled.h4`
  font-weight: lighter;
  text-align: right;
`

const Title = styled.h3`
  font-size: 1.4rem;
  margin-top: 10px;
`

const Description = styled.p`
  font-weight: lighter;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
  margin: 8px 0;
  /* color: #e0e0e0; */
`
const Technologies = styled.h4`
  padding: 8px 3px;
  font-weight: lighter;
  border-top: 1px solid #424242;
  /* border-bottom: 1px solid #424242; */
  /* color: #e0e0e0; */
`

const ImgContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  overflow: hidden;
`
const LinksContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* background-color: rgba(200, 200, 200, 0.2); */
  /* background-color: #0289d169; */
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: 0.3s;
  ${Container}:hover & {
    opacity: 1;
  }
`
const Link = styled.a`
  flex: 1;
  padding: 20px 0;
  /* height: 20%; */
  /* padding: 15px 30px; */
  /* background-color: #111216; */
  /* background-color: #0289d169; */
  text-align: center;
  background-color: ${(props) => (props.github ? '#0289d19b' : '#00e677a4')};
  /* background-color: ${(props) => (props.github ? '#00c853' : '#0091ea')}; */
  transition: .3s;
  &:hover {
    flex: 1.3;
  }
`

const Card = ({ time, title, description, technologies, img }) => {
  const [mouseOn, setMouseOn] = useState()
  return (
    <Container>
      <ImgContainer>
        <Image src={img} />
        <LinksContainer>
          <Link github href='https://material-ui.com/customization/color/'>
            Github
          </Link>
          <Link href='https://material-ui.com/customization/color/'>
            Podgląd
          </Link>
        </LinksContainer>
      </ImgContainer>
      {/* <Time>{time}</Time> */}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Technologies>{technologies}</Technologies>

      {/* <Link
        href="https://material-ui.com/customization/color/"
      >
        Github
      </Link>
      <Link
        href="https://material-ui.com/customization/color/"
      >
        Podgląd
      </Link> */}
    </Container>
  )
}

export default Card
