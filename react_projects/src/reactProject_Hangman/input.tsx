import { useEffect, useState } from 'react'

export const Input = () => {
  const [word, setWord] = useState('')
  const [arrayStrings, setArrayStrings] = useState([])
  const [noMatchArray, setNoMatchArray] = useState([])

  const displayNewWord = async () => {
    const response = await fetch(' https://puzzle.mead.io/puzzle?wordCount=1')
    const data = await response.json()
    const newWord = data.puzzle.toUpperCase()
    setWord(newWord)
    setArrayStrings(Array(newWord.length).fill(''))
    setNoMatchArray([])
  }

  useEffect(() => {
    displayNewWord()
  }, [])

  const wordArray = word.split('')

  useEffect(() => {
    const listener = e => {
      const userAttempt = e.key.toUpperCase()

      if (wordArray.includes(userAttempt)) {
        setArrayStrings(wordArray.map((char, index) => {
          if (userAttempt === char) {
            return char
          } else {
            return arrayStrings[index]
          }
        }))
      } else {
        setNoMatchArray(noMatchArray.concat(userAttempt))
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  })

  return (
    <>
      <h1 className="title">HANGMAN</h1>
      <div className="play-btn-container">
        <button className="play" onClick={async () => await displayNewWord()}>PLAY</button>
      </div>

      <div className="chances-container">
        {Array(16).fill('').map((char, i) => {
          return <div className="chance" key={i}>
            {noMatchArray[i] || ''}
          </div>
        })}
      </div>

      <div className="word-container">
        {arrayStrings.map((char, i) => {
          return <div className="character" key={i}>{char}

          </div>
        })}
      </div>

      <div className="result">
        {noMatchArray[15] && <div>You Lost! It's {word}</div>}
        {!(arrayStrings.length === 0) && arrayStrings.every(char => char !== '') && <div>You Won:D</div>}
      </div>
    </>)
}
