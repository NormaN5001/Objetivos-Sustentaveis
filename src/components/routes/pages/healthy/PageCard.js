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
        <S.Goals>
          <S.SubTitle>Objetivo 3 - Melhorias na área da saúde.</S.SubTitle>
          <S.TopicOne>1- Equipamentos para os profissionais, para que possam dar o seu melhor.</S.TopicOne>
          <S.TopicTwo>2- Uma estrutura melhor para o atendimento da população. Atualmente casos mais complicados, o paciente é levado para a cidade mais próxima. (15km)</S.TopicTwo>
        </S.Goals>
        <S.LinkVoltar href="/">
          <S.Button>Voltar</S.Button>
        </S.LinkVoltar>
      </S.Page>
    </S.Container>
  )
}