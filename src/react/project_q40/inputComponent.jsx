import React from 'react'

export const InputComponent = (props) => {
  const [input, setInput] = React.useState('')

  return (
    <>
      <div className='flex gap-[40px]'>
        <input className='bg-sky-500/50 text-[30px] rounded-[4px] px-[8px] shadow-[4px_4px_#0891b2b5]' placeholder="Enter your first name" onChange={e => setInput(e.target.value)}></input>
        <button className='bg-sky-500/50 text-[30px] rounded-[4px] px-[8px] hover:shadow-[4px_4px_#0891b2b5]' onClick={() => props.handleChange(input)} >Say Hello</button>
      </div>
    </>
  )
}
