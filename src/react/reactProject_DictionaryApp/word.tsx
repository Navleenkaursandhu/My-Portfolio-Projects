import { useState } from 'react'
import image from './assets/dictionary.png'
export const Word = (props) => {
  const [enteredWord, setEnteredWord] = useState('')

  return (
    <>
      <div className="lg:w-[46%] w-full flex flex-col bg-[#f4e8d8] bg-no-repeat bg-contain bg-bottom border-[10px] border-[#2c2f62] lg:border-r-0 lg:border-b-[10px] border-b-0" style={{ backgroundImage: `url(${image})` }}>
        <div className='text-[50px] text-center text-[#312e5c] pt-[30px]'>One App Instead Of 1000 Words</div>
        <div className='flex items-center justify-center md:p-[70px] md:pb-[320px] sm:pb-[280px] pb-[174px] px-[10px] text-[#474b74] '>
          <input className='text-[24px] border-[#474b74] rounded-[10px] p-[10px] lg:w-[80%] md:w-[50%] sm:w-[60%] w-[86%] font-applyCormorant text-[#3e4579]' type="text" placeholder='Enter word' onChange={(e) => setEnteredWord(e.target.value)} />
          <span onClick={() => props.onChange(enteredWord)} className="material-symbols-rounded flex flex-col justify-center ml-[-48px] text-[40px] hover:cursor-pointer">search</span>
        </div>
      </div>
    </>
  )
}
