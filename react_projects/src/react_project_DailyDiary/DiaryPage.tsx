import { formatISO } from 'date-fns'
import { useState } from 'react'
import image from './assets/image.png'
export const DiaryPage = (props) => {
  const [object, setObject] = useState({})
  console.log(props.currentDate)

  const createObject = (e) => {
    setObject((prev) => {
      const newVal = { ...prev }
      newVal[formatISO(props.currentDate)] = e.target.value
      return newVal
    }
    )
  }
  console.log(object)
  return (
    <div className='diary-page'>
      <img className="image-diary-page" src={image} />
      <div className='textarea-container'>
        <textarea value={object[formatISO(props.currentDate)] || ''} onChange={(e) => createObject(e)} />
      </div>
    </div>
  )
}
