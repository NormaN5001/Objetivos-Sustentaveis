import React, { useState } from 'react'
import * as S from './CardStyles'
import InfosCard from './InfoCards'

export default function Card(){

  const [card, setCard] = useState(InfosCard)

  return(
    <S.CardSection>
      {card.map(item => (
        <S.Card>
          <h2>{item.number}</h2>
          <h3>{item.title}</h3>
          <img src={item.img} alt="Icone do objetivo"/>
        </S.Card>
      ))}
    </S.CardSection>
  )
}