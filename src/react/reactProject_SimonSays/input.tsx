import { useState } from 'react'

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
    <>
      <div className="text-[40px] text-center">
        Simon Says 😀
      </div>

      <div className="flex flex-col justify-center items-center gap-[14px] p-[14px]">
        {Array(5).fill(0).map((value, i) => {
          if (gameState === 'lose' && i === userInput[userInput.length - 1]) {
            return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] bg-[red]" key={i}></div>
          }

          if (boxToColor === i) {
            return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] bg-[blue]" key={i}></div>
          }

          if (userInput.includes(i)) {
            return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] bg-[green]" key={i}></div>
          }

          return <div onClick={() => inputUser(i)} className="h-[90px] w-[90px] rounded-[10px] shadow-[3px_3px_grey] bg-[#f9f8f4]" key={i}></div>
        })}
      </div>

      <div className="text-center">
        <button className="text-[20px] rounded-[10px] p-[6px] bg-[#e5e7eb] hover:cursor-pointer hover:shadow-[3px_3px_grey]" onClick={() => { void startGame() }}>PLAY</button>
      </div>

      <div className="text-[24px] text-center p-[10px]">{message}</div>
    </>
  )
}
