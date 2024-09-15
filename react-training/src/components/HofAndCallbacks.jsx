import React from 'react'

const HofAndCallbacks = () => {


//operation is a higher order function which takes function as an argument
// callback is a callback which function passes as a paramter into another function 

function operation(num1 , num2 , callback){
  return callback(num1 , num2);
}

function addition(a , b){
  return a + b;
}

function substraction(a , b){
    return a - b;
}

function multiplication(a , b){
    return a * b;
}

function division(a , b){
    return a / b;
}

console.log(operation(10,20,addition))
console.log(operation(10,20,substraction))
console.log(operation(10,20,multiplication))
console.log(operation(10,20,division))

  return (
    <div>
      
    </div>
  )
}

export default HofAndCallbacks
