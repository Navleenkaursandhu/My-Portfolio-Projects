import image from './assets/image.jpg'
import React from 'react'

let amount = 0
export const Input = () => {
  const [totalCost, setTotalCost] = React.useState('')
  const [tip, setTip] = React.useState('')
  const [splitNum, setSplitNum] = React.useState('1')

  const add = () => {
    setSplitNum(prevNum => (Number(prevNum) + 1).toString())
  }

  const sub = () => {
    if (Number(splitNum) > 1) {
      setSplitNum(prevNum => (Number(prevNum) - 1).toString())
    }
  }

  if (Number(splitNum) > 0) {
    amount = (((Number(totalCost) * Number(tip)) / 100) + Number(totalCost)) / Number(splitNum)
  }

  return (
    <>
      <div className='main-container'>
        <img className='background' src={image} />
        <div className='ui-container'>
          <div className='title'>
            Tip Calculator
          </div>

          <div className='total-cost'>
            <div>Total Cost in Dollars:</div>
            <input
              placeholder='Enter bill total' onChange={(e) => setTotalCost(e.target.value)}></input>
          </div>

          <div className='tip-amount'>
            <div>Tip %:</div>
            <input
              placeholder='Enter tip percentage' onChange={(e) => setTip(e.target.value)}></input>
          </div>

          <div className='split'>Split:
            <div className='add' onClick={() => add()}>+</div>
            <div>{splitNum}</div>
            <div className='subtract' onClick={() => sub()}>-</div>
          </div>

          <div className='total-per-person'>Total per Person
          </div>

          <div className='split-amount'>$ {amount.toFixed(2)}</div>
        </div>
      </div>
    </>
  )
}
