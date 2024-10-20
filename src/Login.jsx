import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function Login() {
    let navigate=useNavigate ();
   const submit=()=>{
    if(Success)
    {
       navigate('/dashboard');
    }
   }
  return (
    <div>Login
        <button onClick={submit}></button>
    </div>
  )
}

export default Login