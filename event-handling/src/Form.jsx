import { useState } from "react"

import ("./Form.css")
const Form =()=>{
    const [firstNumState,setFirstNumber] = useState(0)
    const [secondNumState, setSecondNumber] = useState(0)
    const [sumState, setSumState] = useState(0)
    
   
    const btnAdd = (e)=>{
         setSumState(parseInt(firstNumState)+parseInt(secondNumState))
    }

    const onFirstNumberChange =(e)=>{
        setFirstNumber(e.target.value)
        setSumState(parseInt(e.target.value)+parseInt(secondNumState))
      }
      const onSecondNumberChange=(e)=>{
        setSecondNumber(e.target.value)
        setSumState(parseInt(e.target.value)+parseInt(firstNumState))
     }
return(
<>
    
    <div className=" container justify-content-center align-items-center my-5">
        <h1>Addition</h1>
    <div className="input-group mb-3">
            <input type="number" onChange={onFirstNumberChange} value={firstNumState} className="form-control" placeholder="Enter your first number" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
            <input type="number" onChange={onSecondNumberChange} value={secondNumState} className="form-control" placeholder="Enter your second number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        </div>

        <span>Your Result is : <span>{sumState}</span></span>  <br /><br />

        <button onClick={btnAdd} className="btn btn-primary">Add Me</button>

    </div>
</>
)
}

export default Form