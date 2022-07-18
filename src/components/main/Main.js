import React from 'react'
import * as S from './MainStyles'
import CardOne from './cards/CardOne'
import CardTwo from './cards/CardTwo'
import CardThree from './cards/CardThree'
import CardFour from './cards/CardFour'
import CardFive from './cards/CardFive'
export default function Main(){

  return(
    <S.MainSection>
      <CardOne/>
      <CardTwo/>
      <CardThree/>
      <CardFour/>
      <CardFive/>
    </S.MainSection>
  )
}