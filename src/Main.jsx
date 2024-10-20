import {React,useContext,useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useing } from './Context';
{/* <NavLink className='Link' to='MEN'>MEN</NavLink> */}
function Main() {
    let {id}=useParams();
    let [name,setname]=useContext(useing);
    console.log(id)
  return (
    <div>
        <p>{id}</p>
        {setname('ram')}
        <p>{name}</p>
        {/* <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/menu">menu</NavLink> */}
    </div>
  )
}

export default Main