import { useEffect, useState } from "react"

let count = 0

export const Input = () => {

  const [word, setWord] = useState("")

  const displayNewWord = async () => {
    const response = await fetch(" https://puzzle.mead.io/puzzle?wordCount=1")
    const data = await response.json()
    setWord(data.puzzle)
  }

  useEffect(() => {
    displayNewWord()
  }, [])

  return (
    <>
      <div className="play-btn-container">
        <button className="play" onClick={() => displayNewWord()}>PLAY</button>
      </div>

      <div className="word-container">
        {Array(word.length).fill(0).map(() => {
          return <div className="character" key={count++}>
            h
            <div className="char"></div>
          </div>
        })}
      </div>
      
    </>)

}