import React from 'react'
export const Input = () => {
  const [result, setResult] = React.useState(0)

  const decCounter = () => {
    if (result > 0) {
      setResult(prevValue => prevValue - 1)
    }
  }

  const incCounter = () => {
    setResult(prevValue => prevValue + 1)
  }

  return (
    <>
      <button onClick={() => decCounter()}>-</button> &nbsp;
      <span>{result}</span> &nbsp;
      <button onClick={() => incCounter()}>+</button>
    </>
  )
}
