import './style.css'
import React from 'react'

export const Input = () => {
  const [userChoice, setUserChoice] = React.useState('')
  const [botChoice, setBotChoice] = React.useState('')
  const[userScore, setUserScore] = React.useState(0)
  const[botScore, setBotScore] = React.useState(0)
  const[result, setResult] =  React.useState('Lets Play!')
  const[round, setRound] = React.useState(1)
  

  
  
  const onUserChoice = (choice) => {
    if(round < 3){
    setRound(prev => prev + 1)
    }
    
    setUserChoice(choice)

    const array = ['✊', '✋', '✌️']
    const randomIndex = Math.floor(Math.random() * array.length)
    const botSelect = array[randomIndex]
    setBotChoice(botSelect)

    if((choice === '✊' && botSelect === '✋') ||
       (choice === '✋' && botSelect === '✌️')||
       (choice === '✌️' && botSelect === '✊')){
     setBotScore(prevScore => prevScore + 1)
     //setResult(prev => prev = 'You Lost:(')
    }
    else if(choice === botSelect){
              //setResult(prev => prev ='Draw!')
            }
    else{
      setUserScore(prevScore => prevScore + 1)
      //setResult('You Won:)')
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

      <div className='result'>{result}</div>
      <div className='round'>Round <span>{round}</span> of 3</div>
    </>
  )
}