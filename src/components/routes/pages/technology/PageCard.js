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
            <S.Number>1</S.Number>
            <S.Title>Suporte a novas tecnologias</S.Title>
          </S.Texts>
          <S.Image src={TechnologyImg}/>
        </S.Content>
        <S.Goals>
          <S.SubTitle>Objetivo 1 - Suporte a novas tecnologias em toda a cidade.</S.SubTitle>
          <S.TopicOne>1- Instalações de torres para todas as operadoras.</S.TopicOne>
          <S.TopicTwo>2- Suporte para os provedores de internet implementarem fibra óptica</S.TopicTwo>
        </S.Goals>
      </S.Page>
    </S.Container>
  )
}