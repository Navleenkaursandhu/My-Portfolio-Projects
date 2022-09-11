import React from 'react'

export const Input = () => {

  const [selectOption, setSelectOption] = React.useState("")
  const [num1, setNum1] = React.useState("")
  const [num2, setNum2] = React.useState("")
  const [result, setResult] = React.useState("")


  const displayResult = () => {
    let res;
    switch (selectOption) {
      case "+":
        res = Number(num1) + Number(num2);
        break;
      case "-":
        res = Math.abs(Number(num1) - Number(num2));
        break;
      case "*":
        res = Number(num1) * Number(num2);
        break;
      case "/":
        res = Number(num1) / Number(num2);
    }
    setResult(res)
  }

  return (
    <>
      <input onChange={(e) => setNum1(e.target.value)}></input>&nbsp;

      <select onChange={(e) => setSelectOption(e.target.value)}>
        <option value="choose">Select</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>&nbsp;

      <input onChange={(e) => setNum2(e.target.value)}></input>&nbsp;

      <button onClick={() => displayResult()}>=</button>&nbsp;

      <span>{result}</span>
    </>
  )
}
