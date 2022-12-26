import playerA from './assets/playerA.gif'
import playerB from './assets/playerB.gif'
import attackImage from './assets/punch.png'
import lifelineImage from './assets/first-aid-kit.png'
import playerAPunch from './assets/playerA-punch.mp3'
import playerBPunch from './assets/playerB-punch.mp3'
import playerALifeline from './assets/lifelinePlayerA.mp3'
import playerBLifeline from './assets/lifelinePlayerB.mp3'
import victory from './assets/victory.mp3'
import draw from './assets/draw.mp3'
import { buttonShadowEffect } from '../common/tailwind_constants'
import { useEffect, useState } from 'react'
import { Button } from './Button'

export const FightingGame = () => {
  const [playerAPunchSound] = useState(new Audio(playerAPunch))
  const [playerBPunchSound] = useState(new Audio(playerBPunch))
  const [playerALifelineSound] = useState(new Audio(playerALifeline))
  const [playerBLifelineSound] = useState(new Audio(playerBLifeline))
  const [victorySound] = useState(new Audio(victory))
  const [drawSound] = useState(new Audio(draw))
  const [round, setRound] = useState(5)
  const [isPlayerATurn, setIsPlayerATurn] = useState(true)
  const [playerAHealth, setPlayerAHealth] = useState(100)
  const [playerBHealth, setPlayerBHealth] = useState(100)

  const randomNum = (Math.floor(Math.random() * (10)) + 20)

  const reducePlayerBHealth = () => {
    setIsPlayerATurn(prev => !prev)

    if (playerBHealth > 0) {
      const randomPlayerBHealth = playerBHealth - randomNum
      if (randomPlayerBHealth >= 0) {
        setPlayerBHealth(randomPlayerBHealth)
      } else {
        setPlayerBHealth(0)
      }
    }
  }

  const reducePlayerAHealth = () => {
    setIsPlayerATurn(prev => !prev)
    if (round > 0) {
      setRound(prev => prev - 1)
    }

    if (playerAHealth > 0) {
      const randomPlayerAHealth = playerAHealth - randomNum
      if (randomPlayerAHealth >= 0) {
        setPlayerAHealth(randomPlayerAHealth)
      } else {
        setPlayerAHealth(0)
      }
    }
  }

  const addHealthToPlayerA = () => {
    setIsPlayerATurn(prev => !prev)
    if (playerAHealth < 100) {
      const randomPlayerAHealth = playerAHealth + randomNum
      if (randomPlayerAHealth < 100) {
        setPlayerAHealth(prev => randomPlayerAHealth)
      } else {
        setPlayerAHealth(100)
      }
    }
  }

  const addHealthToPlayerB = () => {
    setIsPlayerATurn(prev => !prev)
    if (round > 0) {
      setRound(prev => prev - 1)
    }
    if (playerBHealth < 100) {
      const randomPlayerBHealth = playerBHealth + randomNum
      if (randomPlayerBHealth < 100) {
        setPlayerBHealth(prev => randomPlayerBHealth)
      } else {
        setPlayerBHealth(100)
      }
    }
  }

  const restartGame = () => {
    setRound(5)
    setIsPlayerATurn(true)
    setPlayerAHealth(100)
    setPlayerBHealth(100)
  }

  const isPlayerBWinner = (!!round && playerAHealth === 0 && playerBHealth !== 0) || (!round && playerBHealth > playerAHealth)
  const isDraw = (!round && playerAHealth === playerBHealth)
  const isPlayerAWinner = (!!round && playerBHealth === 0 && playerAHealth !== 0) || (!round && playerAHealth > playerBHealth)
  const isGameNotOver = !!round && !isPlayerAWinner && !isPlayerBWinner && !isDraw

  useEffect(() => {
    if (isPlayerAWinner || isPlayerBWinner) {
      void victorySound.play()
    }

    if (isDraw) {
      void drawSound.play()
    }
  })

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 lg:text-2xl sm:text-xl text-sm sm:p-4 p-1.5">
        <h1>FIGHTING GAME</h1>
        <div className='flex flex-row sm:gap-4 gap-1 sm:w-4/5 w-full'>
          <div className='flex-1'>
            <div className='flex flex-row justify-between items-center'>
              <div>{playerAHealth}</div>
              <div className={`flex flex-row items-center sm:gap-2 ${(isPlayerATurn && isGameNotOver) ? 'text-indigo-600' : 'text-black'} text-indigo-600`}>
                <div className='sm:inline hidden'>PLAYER A</div>
                <span className="material-symbols-rounded sm:text-6xl text-4xl ">
                  arrow_left
                </span>
              </div>
            </div>
            <div className='w-full flex justify-end sm:h-1/2 h-2/6  bg-gradient-to-r from-red-500 to-rose-200'>
              <div className='h-full bg-gradient-to-r from-lime-400 via-amber-100 to-lime-100' style={{ width: `${playerAHealth}%` }}></div>
            </div>
          </div>
          <div>
            <div className='text-sm text-center'>ROUND</div>
            <div className='flex justify-center items-center rounded-md w-14 py-2 px-5 bg-indigo-400 text-white'>{round}</div>
          </div>

          <div className='flex-1'>
            <div className='flex flex-row justify-between items-center'>
              <div className={`flex flex-row items-center gap-2 ${(!isPlayerATurn && isGameNotOver) ? 'text-indigo-600' : 'text-black'} `}>
                <span className="material-symbols-rounded sm:text-6xl text-4xl">
                  arrow_right
                </span>
                <div className='sm:inline hidden '>PLAYER B</div>
              </div>
              <div>{playerBHealth}</div>
            </div>
            <div className='w-full sm:h-1/2 h-2/6 bg-gradient-to-l from-red-500 to-rose-200'>
              <div className='h-full bg-gradient-to-l from-lime-400 via-amber-100 to-lime-100' style={{ width: `${playerBHealth}%` }}></div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-center'>
            <img className=' sm:h-auto sm:w-auto h-32 sm:ml-16' src={playerA} />
            <img className=' sm:h-auto sm:w-auto h-32' src={playerB} />
          </div>
          <div className='-mt-3.5 rounded-[50%] h-8 bg-gradient-to-b from-lime-400 via-amber-100'></div>
        </div>

        <div className='grid grid-cols-2 sm:gap-x-24 gap-x-12 lg:w-1/2 w-full'>
          <div className='h-[80px] flex gap-4 items-center justify-center'>
            <div>ATTACK</div>
            <Button
              className='bg-gradient-to-r from-rose-100  to-red-300 shadow-[#df8889] hover:shadow-[#df8889]'
              disabled={!isGameNotOver || !isPlayerATurn}
              onClick={() => {
                if (isGameNotOver && isPlayerATurn) {
                  reducePlayerBHealth()
                  void playerAPunchSound.play()
                }
              }}
            >
              <img src={attackImage} />
            </Button>
          </div>

          <div className='h-[80px] gap-4 flex items-center justify-center'>
            <Button
              className='bg-gradient-to-r from-rose-100  to-red-300 shadow-[#df8889] hover:shadow-[#df8889]'
              disabled={!isGameNotOver || isPlayerATurn}
              onClick={() => {
                if (isGameNotOver && !isPlayerATurn) {
                  reducePlayerAHealth()
                  void playerBPunchSound.play()
                }
              }}
            >
              <img className='-scale-x-100' src={attackImage} />
            </Button>
            <div>ATTACK</div>
          </div>

          <div className='h-[80px] flex gap-4 items-center justify-center'>
            <div>LIFELINE</div>
            <Button
              className='bg-gradient-to-b from-blue-100  to-blue-300 shadow-[#7eb6f5] hover:shadow-[#7eb6f5]'
              disabled={!isGameNotOver || !isPlayerATurn}
              onClick={() => {
                if (isGameNotOver && isPlayerATurn) {
                  addHealthToPlayerA()
                  void playerALifelineSound.play()
                }
              }}
            >
              <img src={lifelineImage} />
            </Button>
          </div>

          <div className='h-[80px] flex gap-4 items-center justify-center'>
            <Button
              className='bg-gradient-to-b from-blue-100  to-blue-300 shadow-[#7eb6f5] hover:shadow-[#7eb6f5]'
              disabled={!isGameNotOver || isPlayerATurn}
              onClick={() => {
                if (isGameNotOver && !isPlayerATurn) {
                  addHealthToPlayerB()
                  void playerBLifelineSound.play()
                }
              }}
            >
              <img src={lifelineImage} />
            </Button>
            <div>LIFELINE</div>
          </div>
        </div>

        {isPlayerBWinner && <div className='animate-bounce text-3xl'>PLAYER B WINS!</div>}
        {isPlayerAWinner && <div className='animate-bounce text-3xl'>PLAYER A WINS!</div>}
        {isDraw && <div className='animate-bounce text-3xl'>IT&apos;S A DRAW!</div>}

        <div className='flex flex-col gap-2 items-center'>
          <button onClick={() => restartGame()} className={`${buttonShadowEffect} bg-indigo-400 px-5 py-1.5 rounded-md text-white`}>RESTART</button>
          {!!round && isGameNotOver && <div className='mt-2'>LET&apos;S PLAY!</div>}
          {!isGameNotOver && <div className='mt-2'>GAME OVER, you may restart to play again!</div>}
        </div>
      </div>
    </>
  )
}
