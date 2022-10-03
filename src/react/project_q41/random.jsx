import React from 'react'
export const Random = () => {
  const [num, setNum] = React.useState(0)

  const randomNo = () => {
    const num = (Math.floor(Math.random() * 100))
    setNum(num)
  }

  return (
    <div className='flex flex-col justify-center items-center gap-[30px] h-screen'>
      <div className='text-[30px]'>Click On button to generate a random number</div>
    <button className='text-[30px] px-[40px] py-[10px] rounded-[12px] bg-emerald-300 hover:bg-sky-400' onClick={randomNo}>Click</button>
    <div className='text-[30px]'>{num}</div>
    </div>
  )
}
