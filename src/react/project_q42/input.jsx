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
      <div className='p-[20px] bg-indigo-200 text-[36px]'>
        <div>
          <span >Min Limit: &nbsp;</span>
          <input className='pl-[10px]' type="number" onChange={e => setMin(e.target.value)}></input>
        </div>
        <br />

        <div>
          <span>Max Limit: &nbsp;</span>
          <input className='pl-[10px]' type="number" onChange={e => setMax(e.target.value)}></input>
        </div>
        <br />

        <div className='flex justify-center'>
          <button className='bg-violet-300 px-[30px] rounded-[10px] hover:shadow-[2px_2px_2px_2px_grey]' onClick={generateRandom}>Click</button>
        </div>

        <div>
          <br />
          <span>Random Number = </span>
          <span>{randomNo}</span>
        </div>
      </div>
    </>
  )
}
