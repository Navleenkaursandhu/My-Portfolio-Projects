import './style.css'
import image from './assets/image.png'
import { format } from 'date-fns'
export const Main = () => {
  return (
    <div className="daily-diary">
      <div className="cover-page">
        <img className="image-cover-page" src={image} />
        <div className='cover-title-container'>
          <div className='title'>
            DAILY DIARY
          </div>
          <div className='current-date'>{format(new Date(), 'dd-MM-yyyy, eeee')}</div>
        </div>
      </div>
      <div className="diary-page">
        <img className="image-diary-page" src={image}/>
        <div className='textarea-container'>
          <textarea/>
        </div>
      </div>
      <div></div>
    </div>
  )
}
