import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movies from './Components/Movies'
import Tv from './Components/Tv'
import People from './Components/People'
import TvDetails from './Components/Partials/TvDetails'
import PersonDetails from './Components/Partials/PersonDetails'
import MoviesDetails from './Components/Partials/MoviesDetails'
import Watch from './Components/Partials/Watch'
import About from './Components/About'

export default function App() {
  return (
    <div className='app w-screen h-screen bg-[#0F172A] flex justify-between'>
       
       <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/trendings' element={<Trending/>}/>
          <Route path='/populars' element={<Popular/>}/>
          <Route path='/about' element={<About/>}/>

          
          <Route path='/movie' element ={<Movies/>} />
          <Route path='/movie/details/:id' element={<MoviesDetails/>}>
              <Route path='/movie/details/:id/trailer' element={<Watch/>}/>
          </Route>

          <Route path='/tv' element={<Tv/>} />
          <Route path='/tv/details/:id' element={<TvDetails/>}> 
          <Route path='/tv/details/:id/trailer' element={<Watch/>}/>
          </Route>

          <Route path='/person' element={ <People/>}/>
          <Route path='/person/details/:id' element={<PersonDetails/>}/>

       </Routes>
    </div>
  )
}
