import React from 'react'
import { InputComponent } from './inputComponent'
export const MainComponent = () => {
  const [input, setInput] = React.useState('')

  const handleChange = (input) => {
    setInput(input)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-[40px] h-screen'>
        <InputComponent handleChange={handleChange} />
        <div className='text-[30px] rounded-[4px] px-[8px]'>
          {input && `Oh, Hello there ${input}`}
        </div>
      </div>
    </>
  )
}
