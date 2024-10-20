import React from 'react'
import { useContext } from 'react'
import { useing } from './Context';
import { data1 } from './contant';
function Home() {
   let [name,setname]=useContext(useing);
  return (
    <div>Home
      {name}
      {data1.name}
    </div>
  )
}

export default Home