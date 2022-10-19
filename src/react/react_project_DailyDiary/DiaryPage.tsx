import { formatISO } from 'date-fns'
import { useEffect, useState } from 'react'
import image from './assets/image.png'
import './style.css'
export const DiaryPage = (props) => {
  const [object, setObject] = useState(() => {
    const saved = localStorage.getItem('data')
    console.log('SAVED', saved)
    return JSON.parse(saved) || {}
  })

  const dateKey = formatISO(props.currentDate, { representation: 'date' })
  console.log(props.currentDate)
  const createObject = (e) => {
    setObject((prev) => {
      const newVal = { ...prev }
      newVal[dateKey] = e.target.value
      return newVal
    }
    )
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(object))
  }, [object])

  return (
    <div className='lg:shadow-[25px_0px_25px_0px_#d5d5df] h-[658px] w-full md:w-[550px] bg-[aliceblue] flex flex-col'>
      <img className="-scale-x-100 hidden lg:block w-full border-b border-[#0000001a]" src={image} />
      <div className='p-[25px] flex-1 daily-diary'>
        <textarea className='focus:outline-none py-[6px] text-[25px] px-[12px] w-full h-full overflow-auto notebook-lines' value={object[dateKey] || ''} onChange={(e) => createObject(e)} />
      </div>
    </div>
  )
}
