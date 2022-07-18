import styled from 'styled-components'

export const CardDiv = styled.div`
	background-color: hotpink;
  width: 170px;
  height: 170px;
  position: relative;
  border-radius: 10px;

  h2{
    color: #FFF;
    font-size: 3rem;
    position: absolute;
  }
  h3{
    color: #FFF;
    font-size: 1.2rem;
    text-transform: uppercase;
    position: absolute;
    top: 10px;
    left: 30px;
  }
  img{
    width: 100px;
    position: absolute;
    top: 60px;
    left: 35px;
  }
`
