import React from 'react'
import * as S from './CardOneStyles'
import TechnologyImg from '../../../images/technology-small.png'

export default function CardOne(){

  return(
        <S.CardDiv>
          <h2>1</h2>
          <h3>Tecnologias novas</h3>
          <img src={TechnologyImg} alt="Icone tecnologia"/>
        </S.CardDiv>
  )
}