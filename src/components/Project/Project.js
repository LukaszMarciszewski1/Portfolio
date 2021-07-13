import React, { useState } from 'react'
import styled from 'styled-components'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Container = styled.section`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  opacity: 0.9;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }
`
const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 300px;
  position: relative;
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  transition: 0.3s;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  -webkit-box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.7); 
box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.7);
  ${Container}:hover & {
    opacity: 1;
  }
`
const Link = styled.a`
  flex: 1;
  padding: 8px;
  /* opacity: .9; */
  text-align: center;
  border-right: ${(props) => (props.github ? '1px solid #424242' : null)};
  border-top: none;
  transition: 0.3s;
  /* border-radius: ${(props) => (props.github ? "0px 0px 0px 5px" : "0px 0px 5px 0px")}; */

  &:hover {
    flex: 1.2;
    background-color: #0277bd;
   opacity: 1;
  }
`
const Title = styled.h3`
  font-size: 1.4rem;
  margin-top: 12px;
`

const Description = styled.p`
  font-weight: lighter;
  line-height: 1.5rem;
  margin: 8px 0;
  opacity: 0.8;
`
const TechContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
@media screen and (max-width: 1100px) {
    
  }
`
const TechName = styled.p`
margin: 5px 5px 5px 0;
white-space: nowrap;
`
const Technologies = styled.div`
  font-weight: lighter;
  margin: 0;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`

const Card = ({ title, description, technologies, img }) => {

  return (
    <Container>
      <ImgContainer>
        <Image src={img} />
      </ImgContainer>
      <LinksContainer>
          <Link github href='https://material-ui.com/customization/color/'>
            Github
          </Link>
          <Link href='https://material-ui.com/customization/color/'>
            Podgląd
          </Link>
        </LinksContainer>

      <Title>{title}</Title>
      <Description>{description}</Description>
      <TechContainer>
        <TechName>- Technologie</TechName> <Technologies>{technologies}</Technologies>
      </TechContainer>
    </Container>
  )
}

export default Card
