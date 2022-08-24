import React from 'react'
export const Input = () => {

  const [min, setMin] = React.useState('');
  const [max, setMax] = React.useState('');
  const [count, setCount] = React.useState('');
   
  const[arrayRandomNums, setArrayRandomNums] = React.useState('')

  const generateRandomNum = (count) => {
    let array = []
    for(let i = 0; i < count; i++){
      array[i]= Math.floor(Math.random() * (Number(max) - Number(min) +1) + Number(min) )
    }

    setArrayRandomNums(array.join(", "))
    console.log(arrayRandomNums)
  }

   return(
    <>
    <div>
      <span>Min Limit &nbsp;</span>
      <input type="number" onChange={e => setMin(e.target.value)}></input>
    </div>
    <br/>

    <div>
      <span>Max Limit &nbsp;</span>
      <input type="number" onChange={e => setMax(e.target.value)}></input>
    </div>
    <br/>

    <div>
      <span>Count &nbsp;</span>
      <input type="number" onChange={e => setCount(e.target.value)}></input>
    </div>
    <br/>

    <button onClick={() => generateRandomNum(Number(count))}>Generate random</button>
    
    <div>
    <br/>
    <span>Generated num: {arrayRandomNums}
    </span>
    </div>
    </>
   )
}
