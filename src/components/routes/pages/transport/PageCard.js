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

        <S.Goals>
          <S.SubTitle>Objetivo 2 - Transporte.</S.SubTitle>
          <S.TopicOne>1- Ônibus aos domingos para a locomoção entre os bairros, sejam eles, pagos ou <a target="_Blank" href="https://santanadodeserto.mg.gov.br/tarifa-zero/">Tarifa Zero</a>.</S.TopicOne>
          <S.TopicTwo>2- Horários de ônibus mais flexíveis para toda população.</S.TopicTwo>
        </S.Goals>
        <S.LinkVoltar href="/">
          <S.Button>Voltar</S.Button>
        </S.LinkVoltar>
      </S.Page>
    </S.Container>
  )
}