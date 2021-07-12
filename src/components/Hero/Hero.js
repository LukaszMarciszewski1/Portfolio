import React from 'react';
import styled from 'styled-components'
// import img from '/img/user.svg';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
max-width: 600px;
`
const Autor = styled.div`
margin-top: 80px;
display: flex;
align-items: center;
font-size: 14px;
color: #9e9e9e;
`
const Img = styled.img`
width:40px;
height: 40px;
margin-right: 30px;
`

const Hero = () => {
  return ( 
    <Container>
      <h1>Welcome to Novela, the simplest way to start publishing with Gatsby.</h1>
      <Autor>
        <Img src='/img/user.svg'/>
        <p>Written by You. This is where your author bio lives. Share your work, your joys and of course, your Twitter handle.</p>
      </Autor>
    </Container>
   );
}
 
export default Hero;