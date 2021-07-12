import React from 'react';
import styled from 'styled-components'

import Header from '../Header/Header';
import Hero from '../Hero/Hero';

const Container = styled.div`
box-sizing: border-box;
position: relative;
display: grid;
grid-template-rows: auto;
gap: 60px;
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
@media screen and (max-width: 1200px) {
   gap: 30px;
}
@media screen and (max-width: 600px) {
   gap: 20px;
}
`

const Layout = () => {
  return ( 
    <Container>
       <Header/>
       <Hero/>
    </Container>
   );
}
 
export default Layout;
