import React from 'react'
import * as S from './Styles'
import TransportImg from '../../../../images/transport.png'

export default function CardPage(){

  return(
    <S.Container>
      <S.Page>
        <S.Content>
          <S.Texts>
            <S.TextDefault>Objetivo Sustentável</S.TextDefault>
            <S.Number>2</S.Number>
            <S.Title>Transporte</S.Title>
          </S.Texts>
          <S.Image src={TransportImg}/>
        </S.Content>
      </S.Page>
    </S.Container>
  )
}