import { useState } from 'react'
import image from './assets/dictionary.png'
export const Word = (props) => {



  //const[enteredWord, setEnteredWord] = useState("")

  
  return (
    <>
      <div className="word-container" style={{ backgroundImage: `url(${image})` }}>
        <div className='heading'>One App Instead Of 1000 Words</div>

          <div className='input-word-container'>
            <input type="text" placeholder='search for a word' onChange={(e) => props.func(e.target.value)} />
            <span className="material-symbols-outlined search-icon">
              search
            </span>
          </div>
      </div>
    </>
  )
}