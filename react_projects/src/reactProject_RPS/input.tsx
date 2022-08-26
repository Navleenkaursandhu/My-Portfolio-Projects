import './style.css'
import React from 'react'

const maxRounds = 5
export const Input = () => {
  const [userChoice, setUserChoice] = React.useState('')
  const [botChoice, setBotChoice] = React.useState('')
  const [userScore, setUserScore] = React.useState(0)
  const [botScore, setBotScore] = React.useState(0)
  const [result, setResult] = React.useState('Lets Play!')
  const [round, setRound] = React.useState(1)




  const onUserChoice = (choice) => {
    // if (round === 4) {
    //   setUserChoice('')
    //   setBotChoice('')
    //   setUserScore(0)
    //   setBotScore(0)
    //   setResult('Lets Play Again!')
    // }
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
        //setResult(prev => prev = 'You Lost:(')
      }
      else if (choice === botSelect) {
        //setResult(prev => prev ='Draw!')
      }
      else {
        setUserScore(prevScore => prevScore + 1)
        //setResult('You Won:)')
      }
    }
  }


  // console.log(botScore, userScore)
  // if(botScore > userScore){
  //   setResult('you lost')
  // }
  // else if(botScore < userScore){
  //   setResult('you won')
  // }
  // else{
  //   setResult('draw')
  // }

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
      <div className='title'>Rock Paper Scissors</div>
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
        <button onClick={() => resetGame()}>RESET</button>
      </div>

      <div className='result'>{result}</div>
      <div className='round'>Round <span>{round > maxRounds ? maxRounds : round}</span> of {maxRounds}</div>
    </>
  )
}