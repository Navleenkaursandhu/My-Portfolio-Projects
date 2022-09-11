import React from 'react'
export const Random = () => {

  const [num, setNum] = React.useState(0)

  const randomNo = () => {
    let num = (Math.floor(Math.random() * 100))
    setNum(num)
  }

  return(
    <>
    <button onClick={randomNo}>Generate random no</button>
    <div>{num}</div>
    </>
  )
}