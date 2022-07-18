import React from 'react'
import * as S from './CardThreeStyles'

import HospitalImg from '../../../images/hospital-small.png'

export default function CardThree(){

  return(
    <S.CardDiv>
      <h2>3</h2>
      <h3>Saúde</h3>
      <img src={HospitalImg} alt="Icone Hospital"/>
    </S.CardDiv>
  )
}