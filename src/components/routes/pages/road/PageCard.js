import React from 'react'
import * as S from './Styles'
import TechnologyImg from '../../../../images/technology.png'

export default function CardPage(){

  return(
    <S.Container>
      <S.Page>
        <S.Content>
          <S.Texts>
            <S.TextDefault>Objetivo Sustentável</S.TextDefault>
            <S.Number>4</S.Number>
            <S.Title>Estradas entre bairros</S.Title>
          </S.Texts>
          <S.Image src={TechnologyImg}/>
        </S.Content>
      </S.Page>
    </S.Container>
  )
}