import React, { Fragment, useState } from 'react'

function From({bg,obj}) {
  console.log(bg,{...obj})
    let [details,setdetails]=useState({name:"",email:''});
    // let [email,setemail]=useState('')
  const call=(e)=>{
      e.preventDefault();
      // console.log('fffff');
      // console.log(e.target.name.value)
      // e.target.name.value=''
      console.log(details)
      let a={...details}
      a.name=''
      a.email=''
      setdetails(a)

  
    }
    console.log(details)
    function updatingNameValue(event) {
      // const { value } = event.target;
      // checkName(event.target.value);
      // setUserName((pre) => {
      //   return pre, value;
      // });
    }
    function onchangename(event)
    {
      const {value,name}=event.target;
      if(name=='name')
      setdetails({...details,name:value})
      if(name=='email')
      setdetails({...details,email:value})
      // setemail((pre)=>{return pre,value})  
    }
    // console.log(name)
  return (
    <Fragment className={`${bg}`}>
    <form onSubmit={(e)=>call(e)} className='' >
      <input type="text" onChange={onchangename} value={details.name} name="name" id="name" style={{color:`${bg}`}}/>
      <input type='email' name='email' onChange={onchangename} value={details.email}/><br/>
      <button   className="text-centre text-bg-danger">sumbit</button>
    </form> 
    </Fragment>
  )
}

export default From