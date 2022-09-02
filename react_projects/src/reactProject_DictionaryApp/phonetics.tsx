import { useState } from "react"

export const Phonetics = (props) => {

  let a = props.list
console.log(props.list)
 

 const arrayWithPhoneticText = (a || []).filter((object) => object.text && object.audio)
   
  
   console.log(arrayWithPhoneticText)


  // setPhoneticsArr( phoneticsArr.filter((object) =>{
  //  if(object.hasOwnProperty("text")){
  //   return object
  //  }
  //  console.log(phoneticsArr)
  // }))


  return (
    <>
    <div className="phonetics-container">hello
    

    
    </div>

    
    </>
  )
}