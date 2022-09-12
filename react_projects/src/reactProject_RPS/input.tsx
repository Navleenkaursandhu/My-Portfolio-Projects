import './style.css'
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
      <div className='title'>
        <img className='image' src={image} />
        <div className='game'>Rock Paper Scissors</div>
      </div>

      <div className='buttons'>
        <div className='rock' onClick={() => onUserChoice('✊')}>✊</div>
        <div className='paper' onClick={() => onUserChoice('✋')}>✋</div>
        <div className='scissors' onClick={() => onUserChoice('✌️')}>✌️</div>
      </div>
      <div className='choice'>

        <div>User: {userChoice}</div>
        <div className='user-score'>User Score: {userScore}</div>
        <div>Bot: {botChoice}</div>
        <div>Bot Score: {botScore}</div>
      </div>

      <div className='reset'>
        <button className='reset-btn' onClick={() => resetGame()}>RESET</button>
      </div>

      <div className='result'>{result}</div>
      <div className='round'>Round <span>{round > maxRounds ? maxRounds : round}</span> of {maxRounds}</div>

    </>
  )
}
