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
        <S.Goals>
          <S.SubTitle>Objetivo 5 - Cidade econômica</S.SubTitle>
          <S.TopicOne>1- Criação de eventos dentro da cidade para atrair visitantes, consequentemente, fazendo o capital girar.</S.TopicOne>
          <S.TopicTwo>2- Venda de edifícios abandonados para empresas/indústrias, gerando emprego dentro da cidade. Atualmente, muitas pessoas trabalham fora devida a falta de emprego local.</S.TopicTwo>
        </S.Goals>
        <S.LinkVoltar href="/">
          <S.Button>Voltar</S.Button>
        </S.LinkVoltar>
      </S.Page>
    </S.Container>
  )
}