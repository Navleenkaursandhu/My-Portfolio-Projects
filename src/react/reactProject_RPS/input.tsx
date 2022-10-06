import React from 'react'
import image from './assets/background.png'

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
        setResult('You Lost:(')
      } else if (botScore < userScore) {
        setResult('You Won:)')
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
        <img className='h-[100px] w-[100px] rounded-[50px]' src={image} />
        <div className='game'>Rock Paper Scissors</div>
      </div>

      <div className='flex justify-center gap-[100px] p-[10px]'>
        <div className='h-[150px] w-[150px] bg-[#f6bbbb] rounded-[30px] flex justify-center items-center text-[64px] border-[3px] border-black hover: cursor-pointer hover:shadow-[3px_3px_3px_3px_#f6a4a4] hover:text-[78px]' onClick={() => onUserChoice('✊')}>✊</div>
        <div className='h-[150px] w-[150px] bg-[#f4f4bb] rounded-[30px] flex justify-center items-center text-[64px] border-[3px] border-black hover: cursor-pointer hover:shadow-[3px_3px_3px_3px_#f5f5b0] hover:text-[78px]' onClick={() => onUserChoice('✋')}>✋</div>
        <div className='h-[150px] w-[150px] bg-[#b4b4f5] rounded-[30px] flex justify-center items-center text-[64px] border-[3px] border-black hover: cursor-pointer hover:shadow-[3px_3px_3px_3px_#a4a4f3] hover:text-[78px]' onClick={() => onUserChoice('✌️')}>✌️</div>
      </div>
      <div className='p-[24px] text-center text-[30px]'>

        <div>User: {userChoice}</div>
        <div className='mb-[40px]'>User Score: {userScore}</div>
        <div>Bot: {botChoice}</div>
        <div>Bot Score: {botScore}</div>
      </div>

      <div className='flex justify-center '>
        <button className='rounded-[10px] bg-slate-200 px-[10px] border-2 border-black border-double text-[24px] font-applyArchitect' onClick={() => resetGame()}>RESET</button>
      </div>

      <div className='text-center text-[34px] mt-[14px]'>{result}</div>
      <div className='text-center text-[34px] mt-[14px]'>Round <span>{round > maxRounds ? maxRounds : round}</span> of {maxRounds}</div>
    </>
  )
}
