import {Phonetics} from './phonetics'
import {Meanings} from './meanings'
export const Description = () => {
  return(
    <>
    <div className="description-container">
      <div className='user-input-word'>title</div>
      <Phonetics/>
      <Meanings/>
    </div>
    </>
  )
}