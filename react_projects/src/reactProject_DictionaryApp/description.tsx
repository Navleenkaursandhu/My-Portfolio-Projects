import {Phonetics} from './phonetics'
import {Meanings} from './meanings'
export const Description = (props) => {
  console.log(props)
  return(
    <>
    <div className="description-container">

      {props.wordData.word && <div className='user-input-word'>{props.wordData.word}</div>}
      <Phonetics list={props.wordData.phonetics}/>
      <Meanings list={props.wordData.meanings}/>
      
    </div>
    </>
  )
}