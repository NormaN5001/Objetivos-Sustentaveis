import styled from 'styled-components'

export const CardDiv = styled.div`
	background-color: hotpink;
  width: 170px;
  height: 170px;
  position: relative;
  border-radius: 10px;
  @media(max-width: 950px){
    width: 180px;
    height: 180px;
  }
  @media(max-width: 730px){
    width: 285px;
    height: 285px;
  }
  @media(max-width: 731px){
    margin-top: 490px;
  }
  h2{
    color: #FFF;
    font-size: 2.5rem;
    position: absolute;
    left: 3px;
    @media(max-width: 950px){
      font-size: 2.7rem;
      left: 5px;
    }
    @media(max-width: 730px){
      font-size: 3rem;
      left: 5px;
    }
  }
  h3{
    color: #FFF;
    font-size: 1rem;
    text-transform: uppercase;
    position: absolute;
    top: 10px;
    left: 30px;
    @media(max-width: 950px){
      left: 40px;
    }
    @media(max-width: 730px){
      font-size: 1.2rem;
      left: 35px;
    }
  }
  img{
    width: 100px;
    position: absolute;
    top: 60px;
    left: 35px;
    @media(max-width: 950px){
      width: 120px;
      left: 40px;
    }
    @media(max-width: 730px){
      width: 170px;
      left: 60px;
    }
  }
`
