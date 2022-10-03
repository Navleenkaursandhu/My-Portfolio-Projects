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
    <div className='text-[80px] font-applyOregano gap-[30px] flex flex-col justify-center items-center'>
      <div>Simple Counter</div>
      <div className='flex gap-[50px]'>
        <button className='bg-indigo-200 border-2 border-black w-[100px]' onClick={() => decCounter()}>-</button>
        <div>{result}</div>
        <button className='bg-indigo-200 border-2 border-black w-[100px]' onClick={() => incCounter()}>+</button>
      </div>
    </div>
  )
}
