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
    <div className='text-[30px] w-[50%] font-applyAmiko'>
      <div>Character Length: &nbsp;
        <span>
          <input className='bg-orange-100 pl-[20px]' type="number" onChange={(e) => setLength(e.target.value)}></input>
        </span>
      </div>
      <br />

      <div className='ml-[146px]'>Count: &nbsp;
        <span><input className='bg-orange-100 pl-[20px]' type="number" onChange={(e) => setCount(e.target.value)}></input></span>
      </div>
      <br />

      <div className='flex justify-center'>
        <button className='bg-neutral-300 px-[30px] rounded-[14px] hover:border-2 border-black' onClick={() => numberOfCount()}>Click</button>
      </div>
      <br />

      <div className='flex justify-center flex-wrap gap-[20px]'>
        {array.map((string, i) => <div className='bg-red-100 rounded-[12px] px-[20px]' key={i}>{string}</div>)}
      </div>
    </div>
  )
}
