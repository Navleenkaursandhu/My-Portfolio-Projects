import { Phonetics } from './phonetics'
import { Meanings } from './meanings'
export const Description = (props) => {
  return (
    <>
      <div className="w-[60%] h-full bg-[#f4e8d8] border-[10px] border-[#2c2f62] border-l-0 overflow-auto">
        {!props.error && !props.wordData.word && <div className='h-full flex justify-center items-center text-[50px] text-[#2c2f62]'>Welcome to the Dictionary App!</div>}
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
