import React from 'react'

const JsVarAndOpe = () => {

  var globalVar = "I am a global var"
  let globalLet = "I am a global let"
  const globalConst = "I am a global const"


//   global variables accessible any where 
  console.log(globalVar);
  console.log(globalLet);
  console.log(globalConst);

  function variables(){
    var functionalVar  ="I am a functional var"
    let functionalLet  ="I am a functional let"
    const functionalConst  = "I am a functional const"

    
    // functional variables accessible  during their scope 
    console.log(functionalVar);
    console.log(functionalLet);
    console.log(functionalConst);


    if(true){
        var blockVar  ="I am a block var"
        let blockLet  ="I am a block let"
        const blockConst  = "I am a block const"


        console.log(functionalVar);
        console.log(functionalLet);
        console.log(functionalConst);
    
        
    //  block variable accessible during their block
        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
      }


    //   for blockVar give output but for blockLet and blockConst give error 
      console.log(blockVar);
    //   console.log(blockLet);
    //   console.log(blockConst);
  }


//   not accessible at here because this functionalVar have functional scope s
//   console.log(functionalVar);
  variables();

  
  return (
    <div>
      
    </div>
  )
}

export default JsVarAndOpe
