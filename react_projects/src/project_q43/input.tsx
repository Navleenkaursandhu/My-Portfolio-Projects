import React from 'react'
export const Input = () => {
  const [min, setMin] = React.useState('')
  const [max, setMax] = React.useState('')
  const [count, setCount] = React.useState('')

  const [arrayRandomNums, setArrayRandomNums] = React.useState('')

  const generateRandomNum = (count) => {
    const array = []
    for (let i = 0; i < count; i++) {
      array[i] = Math.floor(Math.random() * (Number(max) - Number(min) + 1) + Number(min))
    }
    setArrayRandomNums(array.join(', '))
  }

  return (
    <div className=' border-double border-8 border-stone-400 p-[20px] text-[30px] rounded-[20px]'>
      <div>
        <span>Min Limit: &nbsp;</span>
        <input className='bg-stone-200 pl-[20px]' type="number" onChange={e => setMin(e.target.value)}></input>
      </div>
      <br />

      <div>
        <span>Max Limit: &nbsp;</span>
        <input className='bg-stone-200 pl-[20px]' type="number" onChange={e => setMax(e.target.value)}></input>
      </div>
      <br />

      <div>
        <span>Count: &nbsp;</span>
        <input className='bg-stone-200 pl-[20px]' type="number" onChange={e => setCount(e.target.value)}></input>
      </div>
      <br />

      <div className='flex justify-center'>
        <button className=' bg-stone-300 px-[40px] rounded-[14px] hover:bg-stone-400' onClick={() => generateRandomNum(Number(count))}>Click</button>
      </div>

      <div>
        <br />
        <span>Random Numbers: {arrayRandomNums}
        </span>
      </div>
    </div>
  )
}
