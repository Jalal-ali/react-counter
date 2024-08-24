import { useState } from "react";

const App = ()=>{
  let [num , setNum] = useState(0) 
  
  const decNum = () => {
  if(num > 0){
  
    setNum(num - 1) ;
  }else{
    alert("Your counter number is already = 0")
  }
}


  const incNum =  () => {
    setNum(num + 1) ;
  } 
   const reset = () => {
    setNum(num = 0) ;
   }
  
  return (
    <>
<div className="d-flex justify-content-center">

    <div className="border-light border rounded-3 w-auto m-5 text-center text-light bg-dark p-3 ">
    <h1 className="mb-3 mx-auto">COUNTER</h1>
    <h2 className="border p-1 border-warning rounded w-25  bg-warning text-dark  mx-auto">{num}</h2>
    <div className="justify-content-center flex-nowrap justify-space-evenly mt-4 d-flex gap-3">
    <button className="btn btn-success" onClick={incNum}>Increase</button>
  <br />
  <br />
    <button className="btn btn-danger" onClick={decNum}>Decrease</button>
    <br />
    <br />
    <button className="btn btn-info" onClick={reset}>reset</button>
    </div>
    </div>

</div>
    </>
  ) 
  
}
export default App ;