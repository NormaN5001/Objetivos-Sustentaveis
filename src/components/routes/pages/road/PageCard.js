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
        <S.Goals>
          <S.SubTitle>Objetivo 4 - Melhoria nas condições das estradas.</S.SubTitle>
          <S.TopicOne>1- Melhorar as condições das vias. Atualmente, as estradas que ligam os bairros: Centro - Ericeira(9km) || Centro - Sossego(6km), são estradas de chão, (não pavimentadas) causando buracos e consequentemente danificando veículos de quem utilizam-a todos os dias.</S.TopicOne>
          <S.TopicTwo>2- Manutenção asfáltica, proporcionando comodidade e segurança para a população. Atualmente, a estrada que liga os bairros: Centro - Serraria, estão em péssimas condições devido a falta de manutenção, podendo causar possíveis acidentes.</S.TopicTwo>
        </S.Goals>
        <S.LinkVoltar href="/">
          <S.Button>Voltar</S.Button>
        </S.LinkVoltar>
      </S.Page>
    </S.Container>
  )
}