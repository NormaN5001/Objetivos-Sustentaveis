import React from 'react'
import * as S from './CardFourStyles'

import RoadImg from '../../../images/road-small.png'

export default function CardFour(){

  return(
    <S.CardDiv>
      <h2>4</h2>
      <h3>Estradas</h3>
      <img src={RoadImg} alt="Icone Estrada"/>
    </S.CardDiv>
  )
}