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
      <div className='flex flex-col items-center gap-14'>
        <h1 className="text-center text-[50px]">HANGMAN</h1>
        <button className={`${buttonShadowEffect} text-[34px] rounded-[10px] px-10 py-1 outline-none bg-rose-200 hover:shadow-rose-300 shadow-rose-300 hover:cursor-pointer`} onClick={() => { void displayNewWord() }}>PLAY</button>
        <div className="flex gap-[20px] justify-center p-[30px]">
          {Array(16).fill('').map((char, i) => {
            return <div className="h-[70px] w-[70px] rounded-[60px] bg-red-100 flex justify-center items-center text-[40px]" key={i}>
              {noMatchArray[i] || ''}
            </div>
          })}
        </div>

        <div className="flex p-[50px] gap-[20px] justify-center text-[60px]">
          {arrayStrings.map((char, i) => {
            return <div className="h-[50px] w-[50px] p-[10px] flex justify-center items-center border-b-[2px] border-black" key={i}>{char}

            </div>
          })}
        </div>

        <div className="flex justify-center text-[50px]">
          {noMatchArray[15] && <div>You Lost! It&apos;s {word}</div>}
          {!(arrayStrings.length === 0) && arrayStrings.every(char => char !== '') && <div>You Won!</div>}
        </div>
      </div>
    </>)
}
