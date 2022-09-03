import './style.css'
import { Word } from './word'
import { Description } from './description'
import { useEffect, useState } from 'react'
export const Main = () => {

  const [wordEntered, setWordEntered] = useState("")
  const [wordObject, setWordObject] = useState({})
  const [apiError, setApiError] = useState()

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordEntered}`)
      const data = await response.json()
      setWordObject(data[0])
    }
    catch (error) {
      console.log("word not found")
    }
  }

  useEffect(() => {
    if (wordEntered !== "") {
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
        <Description wordData={wordObject} />
      </div>
    </div>
  )
}