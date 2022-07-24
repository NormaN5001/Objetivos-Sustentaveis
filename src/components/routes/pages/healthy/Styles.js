import styled from 'styled-components'

export const Container = styled.section`
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
  height: 80vh;
  background-color: #FFF;
  @media(max-width: 950px){
    height: 120vh;
  }
  @media(max-width: 731px){
    height: 100vh;
  }
`
export const Page = styled.section`
  margin: 0 10vw 0 10vw;
  width: 80vw;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media(max-width: 1100px){
    margin: 0;
    width: 100%;
  }
`
export const Content = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #055864;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Texts = styled.div`
  margin-left: 20px;
`
export const TextDefault = styled.p`
  color: #FFF;
  font-size: 1.5rem;
`
export const Number = styled.h3`
  color: #FFF;
  font-size: 6rem;
  font-weight: 400;
`
export const Title = styled.h1`
  color: #FFF;
  font-size: 3rem;
`
export const Image = styled.img`
  width: 30%;
  margin-right: 50px;
  @media(max-width: 768px){
    display: none;
  }
`
export const Goals = styled.div`
  width: 100%;
  height: 270px;
  margin-top: 80px;
  background-color: #FFF;
`
export const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`
export const TopicOne = styled.p`
  margin-top: 30px;
  font-size: 1.2rem;
`
export const TopicTwo = styled.p`
  margin-top: 30px;
  font-size: 1.2rem;
`
export const LinkVoltar = styled.a`
  width: 100%;
`
export const Button = styled.button`
  width: 100%;
  height: 70px;
  border-style: none;
  background-color: #055864;
  font-size: 1.8rem;
  font-weight: 600;
  color: #FFF;
  cursor: pointer;
  @media(max-width: 950px){
    margin-top: 11vh;
  }
  @media(max-width: 731px){
    display: none;
  }
`