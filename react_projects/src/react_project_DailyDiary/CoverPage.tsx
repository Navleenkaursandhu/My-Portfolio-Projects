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
      <div className="cover-page">
        <img className="image-cover-page" src={image} />
        <div className='cover-title-container'>
          <div className='title'>
            DAILY DIARY
          </div>
          <div className='date-container'>
            <div onClick={() => dayBefore()} className='arrow-left'></div>
            <div className='current-date'>{format(date, 'dd-MM-yyyy, eeee')}</div>
            <div onClick={() => dayAfter()} className='arrow-right'></div>
          </div>
        </div>
      </div>

      <DiaryPage currentDate={date} />
    </>
  )
}
