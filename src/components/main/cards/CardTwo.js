import React from 'react'
import * as S from './CardTwoStyles'

import TransportImg from '../../../images/transport-small.png'

export default function CardTwo(){

  return(
    <S.CardDiv>
      <h2>2</h2>
      <h3>Transporte</h3>
      <img src={TransportImg} alt="Icone transporte"/>
    </S.CardDiv>
  )
}