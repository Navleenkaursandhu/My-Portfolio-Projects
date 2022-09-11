import React from 'react'
export const Input = () => {
  const [min, setMin] = React.useState()

  const [max, setMax] = React.useState()

  const [randomNo, setRandomNo] = React.useState()

  const generateRandom = () => {
    const randomNo = (Math.floor(Math.random() * (Number(max) - Number(min) + 1) + Number(min)))
    setRandomNo(randomNo)
  }

  return (
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

    <button onClick={generateRandom}>Generate Random</button>

    <div>
      <br/>
      <span>Generated No: </span>
      <span>{randomNo}</span>
      </div>
    </>
  )
}
