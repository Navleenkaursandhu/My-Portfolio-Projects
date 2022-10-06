import { Definition } from './definition'
import { Synonyms } from './synonyms'
import { Antonyms } from './antonyms'

export const Meanings = (props) => {
  return (
    <>
      <div className="p-[10px] m-[30px] flex flex-col gap-[20px] w-[75%] my-[0px] mx-auto">
        {(props.list || []).map((object, i) => {
          return <div className="bg-[#c4c9de] rounded-[10px] p-[10px] shadow-[3px_3px_#9495c8]" key={i}>
            <div className="mb-[20px] flex items-center text-[28px] text-[#3e3b68]  border-2 border-b-[#9b97d5] border-x-0 border-t-0">
              <span className="text-[#b77155] text-[30px] material-symbols-rounded">description</span>
              {object.partOfSpeech}
            </div>
            <Definition define={object.definitions} />
            <Synonyms similar={object.synonyms} />
            <Antonyms opposite={object.antonyms} />
          </div>
        })}
      </div>
    </>
  )
}
