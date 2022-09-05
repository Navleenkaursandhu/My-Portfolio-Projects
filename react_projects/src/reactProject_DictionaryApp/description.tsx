import { Phonetics } from './phonetics'
import { Meanings } from './meanings'
export const Description = (props) => {
  return (
    <>
      <div className="description-container">
        {props.error && <div className='no-word-found'>{props.error}</div>}
        {!props.error && <>
          {props.wordData.word && <div className='user-input-word'>
            <span className="book material-symbols-outlined">auto_stories</span>
            {props.wordData.word}</div>}
          <Phonetics list={props.wordData.phonetics} />
          <Meanings list={props.wordData.meanings} />
        </>}
      </div>
    </>
  )
}