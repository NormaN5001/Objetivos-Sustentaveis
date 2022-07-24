import styled from 'styled-components'

export const MainSection = styled.section`
  margin-top: 170px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media(max-width: 950px){
    width: 50%;
  }
  @media(max-width: 730px){
    width: 290px;
  }
`