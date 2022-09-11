import { useState } from 'react'
import image from './assets/dictionary.png'
export const Word = (props) => {

  const [enteredWord, setEnteredWord] = useState("")

  return (
    <>
      <div className="word-container" style={{ backgroundImage: `url(${image})` }}>
        <div className='heading'>One App Instead Of 1000 Words</div>
        <div className='input-word-container'>
          <input type="text" placeholder='search for a word' onChange={(e) => setEnteredWord(e.target.value)} />
          <span onClick={() => props.onChange(enteredWord)} className="material-symbols-rounded search-icon">search</span>
        </div>
      </div>
    </>
  )
}