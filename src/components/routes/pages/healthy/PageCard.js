import React from 'react'
import * as S from './Styles'
import HealthyImg from '../../../../images/hospital.png'

export default function CardPage(){

  return(
    <S.Container>
      <S.Page>
        <S.Content>
          <S.Texts>
            <S.TextDefault>Objetivo Sustentável</S.TextDefault>
            <S.Number>3</S.Number>
            <S.Title>Saúde</S.Title>
          </S.Texts>
          <S.Image src={HealthyImg}/>
        </S.Content>
      </S.Page>
    </S.Container>
  )
}