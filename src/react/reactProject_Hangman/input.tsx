import { useEffect, useState } from 'react'
import { buttonShadowEffect } from '../common/tailwind_constants'

export const Input = () => {
  const [word, setWord] = useState('')
  const [arrayStrings, setArrayStrings] = useState<string[]>([])
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
    void displayNewWord()
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
      <div className='text-center'>
        <h1 className="lg:text-5xl text-4xl m-14">HANGMAN</h1>
        <button className={`${buttonShadowEffect} lg:text-4xl text-3xl text-right rounded-[10px] px-10 py-2 outline-none bg-rose-200 hover:shadow-rose-300 shadow-rose-300 hover:cursor-pointer`} onClick={() => { void displayNewWord() }}>PLAY</button>
      </div>

      <div className="flex flex-wrap gap-6 justify-center p-10">
        {Array(16).fill('').map((char, i) => {
          return <div className="lg:h-[70px] lg:w-[70px] md:h-[50px] md:w-[50px] h-[40px] w-[40px] rounded-[60px] bg-red-100 border-2 border-rose-400 flex justify-center items-center lg:text-4xl md:text-4xl text-2xl" key={i}>
            {noMatchArray[i] || ''}
          </div>
        })}
      </div>

      <div className="flex mx-4 lg:gap-6 md:gap-4 gap-2 justify-center lg:text-4xl md:text-4xl text-2xl mt-32">
        {arrayStrings.map((char, i) => {
          return <div className="lg:w-26 md:w-14 w-8 flex justify-center items-end border-b-[2px] border-black" key={i}>
            {char}
          </div>
        })}
      </div>

      <div className="lg:text-5xl md:text-4xl text-2xl text-center mt-16">
        {noMatchArray[15] && <div>You Lost! It&apos;s {word}</div>}
        {!(arrayStrings.length === 0) && arrayStrings.every(char => char !== '') && <div>You Won!</div>}
      </div>
    </>)
}
