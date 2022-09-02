import { Definition } from "./definition"
import { Synonyms } from "./synonyms"
import { Antonyms } from "./antonyms"

export const Meanings = (props) => {


  console.log(props.list)



  return (
    <>
      <div className="meanings-container">
        {(props.list || []).map((object, i) => {
          return <div className="partOfSpeech" key={i}>
            <div className="description">
            <span className="description material-symbols-outlined">description</span>
            {object.partOfSpeech}
            </div>
            <Definition define={object.definitions}/>
            <Synonyms similar={object.synonyms}/>
            <Antonyms opposite={object.antonyms}/>
          </div>
        })}
      </div>
    </>
  )
}