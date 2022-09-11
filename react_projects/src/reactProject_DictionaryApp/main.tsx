import './style.css'
import { Word } from './word'
import { Description } from './description'
import { useEffect, useState } from 'react'
export const Main = () => {
  const [wordEntered, setWordEntered] = useState('')
  const [wordObject, setWordObject] = useState({})
  const [apiError, setApiError] = useState('')

  const fetchData = async () => {
    setWordObject({})
    setApiError('')

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordEntered}`)
    if (response.ok) {
      const data = await response.json()
      console.log(response, data)
      setWordObject(data[0] || {})
    } else {
      setApiError(`Oops! Could not find "${wordEntered}"`)
    }
  }

  useEffect(() => {
    if (wordEntered !== '') {
      fetchData()
    }
  }, [wordEntered])

  const dataFunction = (word) => {
    setWordEntered(word)
  }

  return (
    <div className='dictionary'>
      <div className='main-container'>
        <Word onChange={dataFunction} />
        <Description wordData={wordObject} error={apiError} />
      </div>
    </div>
  )
}
