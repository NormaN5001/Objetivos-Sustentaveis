import React from 'react'
import * as S from './Styles'
import EconomyImg from '../../../../images/economy.png'

export default function CardPage(){

  return(
    <S.Container>
      <S.Page>
        <S.Content>
          <S.Texts>
            <S.TextDefault>Objetivo Sustentável</S.TextDefault>
            <S.Number>5</S.Number>
            <S.Title>Economia</S.Title>
          </S.Texts>
          <S.Image src={EconomyImg}/>
        </S.Content>
      </S.Page>
    </S.Container>
  )
}