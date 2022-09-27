import React from 'react'

export const Input = () => {
  const [selectOption, setSelectOption] = React.useState('')
  const [num1, setNum1] = React.useState('')
  const [num2, setNum2] = React.useState('')
  const [result, setResult] = React.useState('')

  const displayResult = () => {
    let res
    switch (selectOption) {
      case '+':
        res = Number(num1) + Number(num2)
        break
      case '-':
        res = Math.abs(Number(num1) - Number(num2))
        break
      case '*':
        res = Number(num1) * Number(num2)
        break
      case '/':
        res = Number(num1) / Number(num2)
    }
    setResult(res)
  }

  return (
    <div className='text-[40px] font-applyBubblegum'>
      <input className='border-4 border-teal-500 px-[10px] rounded-[12px]' onChange={(e) => setNum1(e.target.value)}></input>&nbsp;

      <select className='border-4 border-blue-400 py-[6px] rounded-[12px]' onChange={(e) => setSelectOption(e.target.value)}>
        <option value="choose">Select</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="/">/</option>
      </select>&nbsp;

      <input className='border-4 border-teal-500  px-[10px] rounded-[12px]' onChange={(e) => setNum2(e.target.value)}></input>&nbsp;

      <div className='text-center mt-[28%]'>
        <button className='bg-blue-400 mb-[30px] px-[10px] rounded-[12px] hover:bg-teal-500' onClick={() => displayResult()}>Click</button>&nbsp;
        <div>{result}</div>
      </div>
    </div>
  )
}
