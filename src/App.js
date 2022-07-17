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
`
const Container = styled.section`
  margin: 0 10vw 0 10vw;
`

  return(
    <Container>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </Container>
  )
}