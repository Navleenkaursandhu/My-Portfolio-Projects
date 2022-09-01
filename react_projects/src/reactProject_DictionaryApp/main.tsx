import './style.css'
import {Word} from './word'
import { Description } from './description'
export const Main = () => {
  return(
    <div className='dictionary'>
      <div className='main-container'>
      <Word/>
      <Description/>
      </div>
  
    </div>
  )
}