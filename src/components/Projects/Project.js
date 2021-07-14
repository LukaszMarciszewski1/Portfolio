import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import LazyLoad from 'react-lazyload';

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
const ImgWrapper = styled.div`
  width: 100%;
  height: auto;
  max-height: 320px;
  position: relative;
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  box-shadow: ${(props) => props.shadow};
  ${Container}:hover & {
    opacity: 1;
  }
`
const Link = styled.a`
  flex: 1;
  padding: 8px;
  text-align: center;
  border-right: ${(props) => (props.github ? `1px solid ${colors.borderColor}` : null)};
  border-top: none;
  transition: background-color 0.3s, flex 0.3s;
  &:hover {
    flex: 1.2;
    background-color: ${colors.blue};
    color: ${colors.white};
  }
`
const Title = styled.h3`
  font-size: 1.4rem;
  margin-top: 12px;
`
const Description = styled.p`
  font-weight: 400;
  line-height: 1.5rem;
  margin: 10px 0 5px;
  opacity: 0.6;
`
const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 1100px) {
  }
`
const TechName = styled.p`
  margin: 12px 15px 5px 0;
  white-space: nowrap;
  font-weight: 400;
  opacity: 0.9;
`
const Technologies = styled.div`
  font-weight: lighter;
  margin: 0;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  color: ${colors.white}
`

const Card = ({ title, description, technologies, img, shadow }) => {
  return (
    <Container>
      <ImgWrapper>
      <LazyLoad >
        <Image src={img} />
        </LazyLoad>
      </ImgWrapper>
      <LinksWrapper shadow={shadow}>
        <Link github href='https://material-ui.com/customization/color/'>
          Github
        </Link>
        <Link href='https://material-ui.com/customization/color/'>Podgląd</Link>
      </LinksWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TechWrapper>
        <TechName>Technologie : </TechName>{' '}
        <Technologies>{technologies}</Technologies>
      </TechWrapper>
    </Container>
  )
}

export default Card
