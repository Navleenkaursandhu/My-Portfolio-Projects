import { formatISO } from 'date-fns'
import { useEffect, useState } from 'react'
import image from './assets/image.png'
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
    <div className='diary-page'>
      <img className="image-diary-page" src={image} />
      <div className='textarea-container'>
        <textarea value={object[dateKey] || ''} onChange={(e) => createObject(e)} />
      </div>
    </div>
  )
}
