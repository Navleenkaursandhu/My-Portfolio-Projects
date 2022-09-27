import { useState } from 'react'
import image from './assets/dictionary.png'
export const Word = (props) => {
  const [enteredWord, setEnteredWord] = useState('')

  return (
    <>
      <div className="w-[44%] h-full flex flex-col bg-[#f4e8d8] bg-no-repeat bg-contain bg-bottom border-[10px] border-[#2c2f62] border-r-0" style={{ backgroundImage: `url(${image})` }}>
        <div className=' text-[50px] text-center text-[#312e5c] flex items-center pt-[30px]'>One App Instead Of 1000 Words</div>
        <div className='flex items-center justify-center p-[70px] text-[#474b74] '>
          <input className='text-[24px] border-[#474b74] rounded-[10px] p-[10px] w-[80%] font-applyCormorant text-[#3e4579]' type="text" placeholder='search for a word' onChange={(e) => setEnteredWord(e.target.value)} />
          <span onClick={() => props.onChange(enteredWord)} className="material-symbols-rounded flex flex-col justify-center ml-[-48px] text-[40px] hover:cursor-pointer">search</span>
        </div>
      </div>
    </>
  )
}
