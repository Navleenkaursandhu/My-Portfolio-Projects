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
      <div className="lg:text-4xl text-3xl text-center pb-4">
        Simon Says 😀
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        {Array(5).fill(0).map((value, i) => {
          if (gameState === 'lose' && i === userInput[userInput.length - 1]) {
            return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] bg-rose-500" key={i}></div>
          }

          if (boxToColor === i) {
            return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] bg-cyan-500" key={i}></div>
          }

          if (userInput.includes(i)) {
            return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] bg-emerald-500" key={i}></div>
          }

          return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] shadow-[3px_3px_grey] bg-[#f9f8f4]" key={i}></div>
        })}
      </div>

        <button className={`lg:text-2xl text-xl rounded-md text-center mt-4 px-6 py-1 bg-[#e5e7eb] shadow-gray-500 hover:shadow-gray-500 ${buttonShadowEffect}`} onClick={() => { void startGame() }}>PLAY</button>

      <div className="text-xl text-center pt-4">{message}</div>
    </div>
  )
}
