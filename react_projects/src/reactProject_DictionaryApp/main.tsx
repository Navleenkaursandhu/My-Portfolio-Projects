import './style.css'
import {Word} from './word'
import { Description } from './description'
import { useEffect, useState } from 'react'
export const Main = () => {

const [wordEntered, setWordEntered] = useState("")
const [wordObject, setWordObject] = useState([])

  const fetchData = async() => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordEntered}`)
    const data = await response.json()
    const wordObject = data[0]
   console.log(wordObject)
  //  setWordObject(data[0])
  //  console.log(wordObject)
  }

 
 useEffect(() => {
  if(wordEntered !== ""){
  fetchData()
  
  }
 }, [wordEntered])

 
 const dataFunction = (word) => {
  setWordEntered(word)
 }

  return(
    <div className='dictionary'>
      <div className='main-container'>
      <Word func={dataFunction}/>
      <Description/>
      </div>
  
    </div>
  )
}