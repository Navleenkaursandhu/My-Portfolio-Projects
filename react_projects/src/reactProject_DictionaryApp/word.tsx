import image from './assets/dictionary.png'
export const Word = () => {
  return (
    <>
      <div className="word-container">
        <div className='heading'>One App Instead Of 1000 Words</div>

          <div className='input-word-container'>
            <input type="text" placeholder='search for a word' />
            <span className="material-symbols-outlined search-icon">
              search
            </span>
          </div>

        <div className='image-container'>
          <img className="dictionary-image" src={image}></img>
        </div>
      </div>
    </>
  )
}