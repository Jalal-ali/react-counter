import { useState } from "react";
import React from 'react'

const App = ()=>{
  const [num , setNum] = useState(0) 
  
  const decNum = () => {
    setNum(num - 1) ;
  } 

  const incNum =  () => {
    setNum(num + 1) ;
  } 
  
  
  return (
    <>
<div className="d-flex justify-content-center">

    <div className="border-primary border rounded w-auto m-5 text-center text-light bg-dark p-3 ">
    <h1 className="mb-3 mx-auto">COUNTER</h1>
    <h2 className="border border-warning rounded w-25 bg-warning text-dark  mx-auto">{num}</h2>
    <div className="justify-content-center justify-space-evenly mt-4 d-flex gap-3">
    <button className="btn btn-success" onClick={incNum}>Increase</button>
  <br />
  <br />
    <button className="btn btn-danger" onClick={decNum}>Decrease</button>
    </div>
    </div>

</div>
    </>
  ) 
  
}
export default App ;