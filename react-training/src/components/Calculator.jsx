import React, { useState } from 'react'

const Calculator = () => {

    const [num1 , setNum1] = useState(0)
    const [num2 , setNum2] = useState(0)
    const [result , setResult] = useState(null)


    function addition(){
        setResult(Number(num1) + Number(num2));
    }

    
    function substraction(){
        setResult(Number(num1) - Number(num2));
    }

    
    function multiplication(){
        setResult(Number(num1) * Number(num2));
    }

    
    function division(){
        if (num2 === 0) {
            setResult('Cannot divide by zero');
          } else {
            setResult(Number(num1) / Number(num2));
          }
    }



  return (
    <>
      <div>calculator</div>
    
      <div>
        <label>Number 1: </label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
     
      <div>
        <label>Number 2: </label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>


      <div >
      <button onClick={addition}>addition</button>
      <button onClick={substraction}>substraction</button>
      <button onClick={multiplication}>multiplication</button>
      <button onClick={division}>division</button>
      </div>

      <h1>result :- {result}</h1>
    </>
  )
}

export default Calculator
