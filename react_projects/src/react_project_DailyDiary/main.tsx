import './style.css'
import image from './assets/image.png'
export const Main = () => {
  return (
    <div className="daily-diary">
      <div className="cover-page">
        <img className="image-cover-page" src={image} />
        <div className='cover-title-container'>
          <div className='title'>
            DAILY DIARY
            <span className="pen material-symbols-rounded">
              edit
            </span>
          </div>
        </div>
      </div>
      <div className='binder'></div>
      <div className="diary-page">
        <img className="image-diary-page" src={image} />
      </div>
      <div></div>
    </div>
  )
}
