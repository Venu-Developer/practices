import React from 'react'
// import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import App from './App.js' 
import From from './FormDeatails.jsx'
import {BrowserRouter,Routes,Router, Route, Link} from 'react-router-dom'
import Come from './Come.jsx'
import Main from './Main.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Menu from './Menu.jsx'
function Routerlayer() {
  return (
    <div>
      <p>hello</p>
      
     <BrowserRouter>
     <Link to='/'>home</Link>
     <Link to='/about'>about</Link>
     <Link to='/menu'>menu</Link>
     <Link to='/come'>come</Link>
     <Link to='/main/1'>main</Link>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/come' element={<Come/>}/>
        <Route path='/main/:id' element={<Main/>}/>
        {/* </Route> */}
        {/* nested route */}
        <Route path='/book'>
             {/* <Route path='1' element={}/>
             <Route path='1' element={}/> */}
        </Route>
        <Route path='login' element/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default Routerlayer