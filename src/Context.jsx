import React, { useState } from 'react'
import {useContext,createContext} from 'react';
export let useing=createContext();
function Context(p) {
    let [name,setname]=useState('venu')
  return (
    <useing.Provider value={[name,setname]}>
        {p.children}
    </useing.Provider>
  )
}

export default Context