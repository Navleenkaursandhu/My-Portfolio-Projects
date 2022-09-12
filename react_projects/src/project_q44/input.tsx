import React from 'react'
export const Input = () => {
  const charList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*-_'

  const [length, setLength] = React.useState('')
  const [count, setCount] = React.useState('')
  const [array, setArray] = React.useState([])

  const generateRandomString = (length) => {
    const arrayRandomChars = []

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charList.length)
      const randomChar = charList[randomIndex]
      arrayRandomChars.push(randomChar)
    }
    return arrayRandomChars.join('')
  }

  const numberOfCount = () => {
    const countArray = []

    for (let i = 0; i < Number(count); i++) {
      countArray[i] = generateRandomString(length)
    }
    setArray(countArray)
  }

  return (
    <>
      <div>Character Length: &nbsp;
        <span>
          <input type="number" onChange={(e) => setLength(e.target.value)}></input>
        </span>
      </div>
      <br />

      <div>Count: &nbsp;
        <span><input type="number" onChange={(e) => setCount(e.target.value)}></input></span>
      </div>
      <br />

      <div>
        <button onClick={() => numberOfCount()}>Generate random</button>
      </div>
      <br />

      <div>{array.map((string, i) => <div key={i}>{string}</div>)}
      </div>
    </>
  )
}
