import {Routes, Route} from 'react-router-dom'
import PageCard1 from './pages/technology/PageCard'

export const RouterApp = ()=>{

  return(
    <Routes>
      <Route path="card-one" element={<PageCard1/>}/>
    </Routes>
  )
}