import React from 'react'
import * as S from './CardFiveStyles'

import EconomyImg from '../../../images/economy-small.png'

export default function CardFive(){

  return(
    <S.CardDiv>
      <h2>5</h2>
      <h3>Economia</h3>
      <img src={EconomyImg} alt="Icone Economia"/>
    </S.CardDiv>
  )
}