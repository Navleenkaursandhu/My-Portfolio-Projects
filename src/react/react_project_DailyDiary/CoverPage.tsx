import image from './assets/image.png'
import { addDays, format, isTomorrow, subDays } from 'date-fns'
import { DiaryPage } from './DiaryPage'
import { useState } from 'react'
export const CoverPage = () => {
  const [date, setDate] = useState(new Date())
  const dayBefore = () => {
    setDate(prev => subDays(prev, 1))
  }
  const dayAfter = () => {
    setDate(prev => {
      const newDate = addDays(prev, 1)
      return isTomorrow(newDate) ? prev : newDate
    })
  }
  return (
    <>
      <div className="shadow-[-25px_0px_25px_0px_#d5d5df] h-[658px] w-[550px] bg-[aliceblue] flex flex-col">
        <img className="h-[150px] w-[555px] rounded-tl-[20px] border-b border-[#0000001a]" src={image} />
        <div className='flex flex-col justify-center items-center mt-[150px]'>
          <div className='flex items-center text-[75px] text-[#49664d]'>
            DAILY DIARY
          </div>
          <div className='flex items-center justify-between gap-[20px] mt-[20px]'>
            <div onClick={() => dayBefore()} className='hover:blur-sm border-y-[20px] border-y-transparent border-r-[20px] border-r-[#49664d]'></div>
            <div className='text-[40px] text-[#49664d]'>{format(date, 'dd-MM-yyyy, eeee')}</div>
            <div onClick={() => dayAfter()} className='hover:blur-sm border-y-[20px] border-y-transparent border-l-[20px] border-l-[#49664d]'></div>
          </div>
        </div>
      </div>

      <DiaryPage currentDate={date} />
    </>
  )
}
