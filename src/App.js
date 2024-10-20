import { useState } from "react";
import "./App.css";
import From from "./FormDeatails";
import {NavLink,Outlet} from 'react-router-dom'

function App() {
  // let [value, setvalue] = useState("");
  // let [show, setshow] = useState(false);
  // let fruit = "apple";
  // let [name,setname]=useState('')
  // function call(){

  // }
  let [name,setname]=useState('');
    let [email,setemail]=useState('')
  const call=(e)=>{
      // e.preventDefault();
      console.log(e.target.name.value)
    
    }
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
      setname((pre)=>{return pre,value})
      if(name=='email')
      setemail((pre)=>{return pre,value})  
    }
    let obj={
      name:"venu",
      age:23
    }
  return (
    <div className="">
       {/* <NavLink className='Link' to='/'>MEN</NavLink> */}
       {/* <NavLink className='Link' to='from'>from</NavLink> */}
       <NavLink className='Link' to='come'>come</NavLink>
       
      <From bg={"green"} obj={obj}/>
      <form onSubmit={(e)=>call(e)}>
      <input type="text" onChange={onchangename} value={name} name="name" id="name" />
      <input type='email' name='email' onChange={onchangename} value={email}/><br/>
      <button   className="text-centre text-bg-danger">sumbit</button>
    </form> 
      {/* <div class="row m-2">
        <div class="d-flex col-sm-6 d-lg-flex justify-content-between text-bg-danger d-lg-block ">
          <p>home</p>
          <p className="">about</p>
          <p>contact</p>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-end">
          <button onClick={() => setshow(!show)}>Click</button>
        </div>
        <div
          className={`d-sm-none position-relative ${
            show ? "d-block" : "d-none"
          } `}
        >
          <div className=" position-absolute top-0 end-0">
            <p>home</p>
            <p>bout</p>
          </div>
        </div>
      </div>
      <q class="">{`fruit name is ${fruit}`}</q>
      <p
        className="app"
        style={{ color: value }}
        onClick={() =>
          value == "yellow" ? setvalue("red") : setvalue("yellow")
        }
      >
        hello
      </p>
      <div
        className="border border-1 w-100 position-relative "
        style={{ height: 200 }}
      >
        <div
          style={{ height: 50, bottom: "0", right: "0" }}
          className="border border-2 bg-black w-25 position-absolute"
        >
          <p style={{ height: 50 }}>1</p>
        </div>
        <div
          style={{ height: 50 }}
          className="border border-2 bg-body-secondary w-25 z-3"
        >
          <p style={{ height: 50, color: "red" }}>2</p>
        </div>
        <div
          style={{ height: 50 }}
          className="border border-2 bg-primary w-25  z-n1"
        >
          <p style={{ height: 50, color: "red" }}>3</p>
        </div>
        <div style={{ height: 50 }} className="border border-2 bg-info w-25 ">
          <p style={{ height: 50, color: "red" }}>4</p>
        </div>
      </div>
      <div class="row m-2">
        <div class="d-flex col-sm-6 d-lg-flex justify-content-between text-bg-danger d-lg-block ">
          <p>home</p>
          <p className="">about</p>
          <p>contact</p>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-end">
          <button onClick={() => setshow(!show)}>Click</button>
        </div>
        <div
          className={`d-sm-none position-relative ${
            show ? "d-block" : "d-none"
          } `}
        >
          <div className="position-absolute top-0 end-0">
            <p>home</p>
            <p>bout</p>
          </div>
        </div>
      </div>
      <q class="">{`fruit name is ${fruit}`}</q>
      <p
        className="app"
        style={{ color: value }}
        onClick={() =>
          value == "yellow" ? setvalue("red") : setvalue("yellow")
        }
      >
        hello
      </p>
      <div
        className="border border-1 w-100 position-relative"
        style={{ height: 200 }}
      >
        <div
          className="border border-2 bg-black w-25 position-absolute text-white"
          style={{ height: 50, bottom: "0", left: "0" }}
        >
          <p style={{ height: 50 }}>1</p>
        </div>
        <div
          style={{ height: 50 }}
          className="border border-2 bg-body-secondary w-25 z-3"
        >
          <p style={{ height: 50, color: "red" }}>2</p>
        </div>
        <div
          style={{ height: 50 }}
          className="border border-2 bg-primary w-25 position-absolute z-n1 "
        >
          <p style={{ height: 50, color: "red" }}>3</p>
        </div>
        <div
          style={{ height: 50 }}
          className="_app border border-2 bg-info w-25"
        >
          <p style={{ height: 50, color: "red" }}>4</p>
        </div>
      </div> */}
      {/* <div className="w-50 border border-1  m-auto " style={{ height: 200 }}>
        <div className="border border-3 ">
          <div className="">
            <lable for="name">name</lable>
            <input type="text" name="name" id="name" required />
          </div>
        </div>
      </div>
      <div class="row m-2">
        <div class="d-flex col-sm-6 d-lg-flex justify-content-between text-bg-danger d-lg-block ">
          <p>home</p>
          <p className="">about</p>
          <p>contact</p>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-end">
          <button onClick={() => setshow(!show)}>Click</button>
        </div>
        <div
          className={`d-sm-none position-relative ${
            show ? "d-block" : "d-none"
          } `}
        >
          <div className=" position-absolute top-0 end-0">
            <p>home</p>
            <p>bout</p>
          </div>
        </div>
      </div>
      <q class="">{`fruit name is ${fruit}`}</q>
      <p
        className="app"
        style={{ color: value }}
        onClick={() =>
          value == "yellow" ? setvalue("red") : setvalue("yellow")
        }
      >
        hello
      </p>
      <div
        className="border border-1 w-100 position-relative "
        style={{ height: 200 }}
      >
        <div
          style={{ height: 50, bottom: "0", right: "0" }}
          className="border border-2 bg-black w-25 position-absolute"
        >
          <p style={{ height: 50 }}>1</p>
        </div>
        <div
          style={{ height: 50 }}
          className="border border-2 bg-body-secondary w-25 z-3"
        >
          <p style={{ height: 50, color: "red" }}>2</p>
        </div>
        <div
          style={{ height: 50 }}
          className="border border-2 bg-primary w-25  z-n1"
        >
          <p style={{ height: 50, color: "red" }}>3</p>
        </div>
        <div style={{ height: 50 }} className="border border-2 bg-info w-25 ">
          <p style={{ height: 50, color: "red" }}>4</p>
        </div>
      </div>
      <div class="row m-2">
        <div class="d-flex col-sm-6 d-lg-flex justify-content-between text-bg-danger d-lg-block ">
          <p>home</p>
          <p className="">about</p>
          <p>contact</p>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-end">
          <button onClick={() => setshow(!show)}>Click</button>
        </div>
        <div
          className={`d-sm-none position-relative ${
            show ? "d-block" : "d-none"
          } `}
        >
          <div className=" position-absolute top-0 end-0">
            <p>home</p>
            <p>bout</p>
          </div>
        </div>
      </div>
      <q class="">{`fruit name is ${fruit}`}</q>
      <p
        className="app"
        style={{ color: value }}
        onClick={() =>
          value == "yellow" ? setvalue("red") : setvalue("yellow")
        }
      >
        hello
      </p>
      <div
        className="border border-1 w-100 position-relative"
        style={{ height: 200 }}
      >
        <div
          className="border border-2 bg-black w-25 position-absolute text-white"
          style={{ height: 50, bottom: "0", left: "0" }}
        >
          <p style={{ height: 50 }}>1</p>
        </div>
        <div
          style={{ height: 50 }}
          className="border border-2 bg-body-secondary w-25 z-3"
        >
          <p style={{ height: 50, color: "red" }}>2</p>
        </div>
        <div
          style={{ height: 50 }}
          className="border border-2 bg-primary w-25 position-absolute z-n1 "
        >
          <p style={{ height: 50, color: "red" }}>3</p>
        </div>
        <div
          style={{ height: 50 }}
          className="_app border border-2 bg-info w-25"
        >
          <p style={{ height: 50, color: "red" }}>4</p>
        </div>
      </div> */}
      <div className="w-100 border-1 d-flex justify-content-center align-items-center" style={{ height: 200 }}>
        <div className="border border-3 h-50">
          <div className="">
            <lable for="name">name</lable>
            <input type="text"  value={name} name="name" id="name" required />
          </div>
          <div>
            <lable>emial</lable>
          <input/>
          </div>
          <div className="text-center text-info ">
            <button type="submit"   onSubmit={call} className="text-centre text-bg-danger">sumbit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
