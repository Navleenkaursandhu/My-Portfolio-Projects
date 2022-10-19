import { Phonetics } from './phonetics'
import { Meanings } from './meanings'
export const Description = (props) => {
  return (
    <>
      <div className="lg:w-[54%] w-full bg-[#f4e8d8] border-[10px] border-[#2c2f62] lg:border-l-0 lg:border-t-[10px] border-t-0 lg:overflow-auto">
        {!props.error && !props.wordData.word && <div className='h-full flex justify-center items-center text-[50px] text-[#2c2f62]'>
          <div className='text-center'>Welcome to the Dictionary App!
          </div>
        </div>}
        {props.error && <div className='h-full flex justify-center items-center text-[44px] text-[#2c2f62]'>{props.error}</div>}
        {!props.error && props.wordData.word && <>
          <div className='text-center text-[50px] text-[#312e5c] p-[2px] w-[70%] my-[40px] mx-auto rounded-[10px] flex items-center justify-center gap-[10px]'>
            <span className="material-symbols-rounded text-[60px] text-[#7482d0]">auto_stories</span>
            {props.wordData.word}
          </div>
          <Phonetics list={props.wordData.phonetics} />
          <Meanings list={props.wordData.meanings} />
        </>}
      </div>
    </>
  )
}
