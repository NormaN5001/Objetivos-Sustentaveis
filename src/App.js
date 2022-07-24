import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import Header from './components/header/Header'
import Main from './components/main/Main'

export default function App(){

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Montserrat', sans-serif;
  }
`
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10vw 0 10vw;
  @media(max-width: 1100px){
    margin: 0;
  }
`

  return(
    <Container>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </Container>
  )
}