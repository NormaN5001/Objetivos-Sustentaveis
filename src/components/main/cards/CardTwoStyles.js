import styled from 'styled-components'

export const CardDiv = styled.div`
	background-color: darkblue;
  width: 170px;
  height: 170px;
  position: relative;
  border-radius: 10px;

  h2{
    color: #FFF;
    font-size: 3rem;
    position: absolute;
    left: 4px;
  }
  h3{
    color: #FFF;
    font-size: 1.2rem;
    text-transform: uppercase;
    position: absolute;
    top: 22px;
    left: 33px;
  }
  img{
    width: 100px;
    position: absolute;
    top: 60px;
    left: 35px;
  }
`
