import React from 'react'
import styled from 'styled-components'
import device from '../../utils/breakpoints'

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  row-gap: 100px;
  column-gap: 35px;
  margin-bottom: 80px;
  @media ${device.tablet} {
    row-gap: 50px;
    column-gap: 20px;
  }
  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`

const Portfolio = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Portfolio















// import React from 'react'
// import styled from 'styled-components'
// import data from '../../data'
// import Card from './Project'

// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: auto;
//   row-gap: 100px;
//   column-gap: 35px;
//   margin-bottom: 80px;
//   @media screen and (max-width: 1100px) {
//     row-gap: 50px;
//     column-gap: 20px;
//   }
//   @media screen and (max-width: 700px) {
//     grid-template-columns: 1fr;
//   }
// `
// const Span = styled.span`
// margin: 5px;
// padding: 1px 10px 4px;
// background-color: #323232;
// color: #fff
// `

// const Portfolio = () => {
//   return (
//     <Container>
//       {data.map((item) => (
//         <Card
//           key={item.index}
//           title={item.title}
//           description={
//             item.description
//           }
//           technologies={item.technologies.map((item, index) => <Span key={index}>{item.name}</Span>)}
//           img={item.img}
//         />
//       ))}
//     </Container>
//   )
// }

// export default Portfolio
