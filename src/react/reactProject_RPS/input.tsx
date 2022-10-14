import React from 'react'
import { buttonShadowEffect } from '../common/tailwind_constants'

const maxRounds = 5
export const Input = () => {
  const [userChoice, setUserChoice] = React.useState('')
  const [botChoice, setBotChoice] = React.useState('')
  const [userScore, setUserScore] = React.useState(0)
  const [botScore, setBotScore] = React.useState(0)
  const [result, setResult] = React.useState('Lets Play!')
  const [round, setRound] = React.useState(1)

  const onUserChoice = (choice) => {
    if (round <= maxRounds) {
      setRound(prev => prev + 1)

      setUserChoice(choice)

      const array = ['✊', '✋', '✌️']
      const randomIndex = Math.floor(Math.random() * array.length)
      const botSelect = array[randomIndex]
      setBotChoice(botSelect)

      if ((choice === '✊' && botSelect === '✋') ||
        (choice === '✋' && botSelect === '✌️') ||
        (choice === '✌️' && botSelect === '✊')) {
        setBotScore(prevScore => prevScore + 1)
      } else if (choice === botSelect) {
        setBotScore(botScore)
        setUserScore(userScore)
      } else {
        setUserScore(prevScore => prevScore + 1)
      }
    }
  }

  React.useEffect(() => {
    if (round > maxRounds) {
      if (botScore > userScore) {
        setResult('You Lost!')
      } else if (botScore < userScore) {
        setResult('You Won!')
      } else {
        setResult('Draw!')
      }
    }
  }, [round])

  const resetGame = () => {
    setUserChoice('')
    setBotChoice('')
    setUserScore(0)
    setBotScore(0)
    setRound(1)
    setResult('Lets Play!')
  }

  return (
    <>
      <div className='text-center text-[40px] flex justify-center gap-[20px] items-center p-[10px]'>
        <div className='flex gap-6 text-gray-500 font-bold text-5xl'>ROCK PAPER SCISSORS</div>
      </div>

      <div className='flex justify-center gap-[100px] p-[10px]'>
        <div className={`${buttonShadowEffect} hover:shadow-teal-600 hover:cursor-pointer shadow-teal-600 h-[150px] w-[150px] bg-teal-400 rounded-[30px] flex justify-center items-center text-[64px] hover:text-[78px]`} onClick={() => onUserChoice('✊')}>✊</div>
        <div className={`${buttonShadowEffect} hover:shadow-indigo-600 hover:cursor-pointer shadow-indigo-600 h-[150px] w-[150px] bg-indigo-400 rounded-[30px] flex justify-center items-center text-[64px] hover:text-[78px]`} onClick={() => onUserChoice('✋')}>✋</div>
        <div className={`${buttonShadowEffect} hover:shadow-fuchsia-600 hover:cursor-pointer shadow-fuchsia-600 h-[150px] w-[150px] bg-fuchsia-400 rounded-[30px] flex justify-center items-center text-[64px] hover:text-[78px]`} onClick={() => onUserChoice('✌️')}>✌️</div>
      </div>

      <div className='text-gray-500'>
        <div className='p-[24px] text-center text-[30px]'>
          <div>User: {userChoice}</div>
          <div className='mb-[40px]'>User Score: {userScore}</div>
          <div>Bot: {botChoice}</div>
          <div>Bot Score: {botScore}</div>
        </div>
      </div>

      <div className='flex justify-center '>
        <button className={`${buttonShadowEffect} hover:shadow-indigo-600 hover:cursor-pointer shadow-indigo-600 rounded-[10px] bg-indigo-400 border-none px-8 py-2 text-4xl text-stone-200`} onClick={() => resetGame()}>RESET</button>
      </div>

      <div className='flex flex-col gap-6 text-center text-[34px] mt-[20px]'>
        <div className='text-gray-500 text-5xl'>Round <span>{round > maxRounds ? maxRounds : round}</span> of {maxRounds}</div>
        <div className='text-teal-400 text-4xl'>{result}</div>
      </div>
    </>
  )
}
