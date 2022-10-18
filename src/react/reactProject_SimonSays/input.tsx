import { useState } from 'react'
import { buttonShadowEffect } from '../common/tailwind_constants'

const sleep = async (timeToSleep) => await new Promise(resolve => setTimeout(resolve, timeToSleep))

export const Input = () => {
  const [order, setOrder] = useState([0, 1, 2, 3, 4])
  const [boxToColor, setBoxToColor] = useState(-1)
  const [message, setMessage] = useState('')
  const [userInput, setUserInput] = useState<number[]>([])
  const [gameState, setGameState] = useState('idle')

  const startGame = async () => {
    if (gameState !== 'blinking') {
      setGameState('blinking')
      setUserInput([])
      setMessage('WATCH')

      const shuffledArray = [...order].sort((a, b) => {
        return 0.5 - Math.random()
      })

      setOrder(shuffledArray)
      console.log(shuffledArray)

      for (let i = 0; i < shuffledArray.length; i++) {
        setBoxToColor(shuffledArray[i])
        await sleep(1000)
      }

      setBoxToColor(-1)
      setMessage("It's Your Turn!")
      setGameState('gettingUserInput')
    }
  }

  const inputUser = (i) => {
    if (gameState === 'gettingUserInput' && !userInput.includes(i)) {
      const newUserInput = userInput.concat(i)
      setUserInput(newUserInput)

      for (let index = 0; index < newUserInput.length; index++) {
        if (newUserInput[index] !== order[index]) {
          setGameState('lose')
          setMessage('You Lost!')
        } else if (newUserInput.length === 5) {
          setGameState('win')
          setMessage('You Won!')
        }
      }
    }
  }

  return (
    <div className='font-applyBubblegum flex flex-col items-center'>
      <div className="lg:text-4xl text-3xl text-yellow-500 text-center pb-3 pt-1">
        Simon Says 😀
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mb-4">
        {Array(5).fill(0).map((value, i) => {
          if (gameState === 'lose' && i === userInput[userInput.length - 1]) {
            return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] bg-rose-300" key={i}></div>
          }

          if (boxToColor === i) {
            return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] bg-cyan-300" key={i}></div>
          }

          if (userInput.includes(i)) {
            return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] bg-emerald-300" key={i}></div>
          }

          return <div onClick={() => inputUser(i)} className="h-[90px] border-2 border-gray-200 w-[90px] rounded-[10px] bg-gray-100" key={i}></div>
        })}
      </div>

        <button className={`lg:text-2xl text-xl rounded-md text-center px-6 py-1 text-white bg-orange-200 shadow-orange-300 hover:shadow-orange-300 ${buttonShadowEffect}`} onClick={() => { void startGame() }}>PLAY</button>

      <div className="lg:text-2xl text-xl text-center text-yellow-500 pt-4">{message}</div>
    </div>
  )
}
