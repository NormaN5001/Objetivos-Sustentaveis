import React from 'react'
import * as S from './MainStyles'
import CardOne from './cards/CardOne'
import CardTwo from './cards/CardTwo'
import CardThree from './cards/CardThree'
import CardFour from './cards/CardFour'
import CardFive from './cards/CardFive'
import PageCard1 from '../routes/pages/technology/PageCard'
import PageCard2 from '../routes/pages/transport/PageCard'
import PageCard3 from '../routes/pages/healthy/PageCard'
import PageCard4 from '../routes/pages/road/PageCard'
import PageCard5 from '../routes/pages/economy/PageCard'


import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'

export default function Main(){

  return(
    <S.MainSection>
      <Router>
        <Link to="card-one">
          <CardOne/>
        </Link>

        <Link to="card-two">
          <CardTwo/>
        </Link>

        <Link to="card-three">
          <CardThree/>
        </Link>

        <Link to="card-four">
          <CardFour/>
        </Link>

        <Link to="card-five">
          <CardFive/>
        </Link>

          <Routes>
            <Route path="card-one" element={<PageCard1/>}/>
            <Route path="card-two" element={<PageCard2/>}/>
            <Route path="card-three" element={<PageCard3/>}/>
            <Route path="card-four" element={<PageCard4/>}/>
            <Route path="card-five" element={<PageCard5/>}/>
          </Routes>
      </Router>
    </S.MainSection>
  )
}