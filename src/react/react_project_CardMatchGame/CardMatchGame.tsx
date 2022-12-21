import { cards } from './cardsData'
import { buttonShadowEffect } from '../common/tailwind_constants'
import { useEffect, useState } from 'react'

export const CardMatchGame = () => {
  const [currentCardsData, setCurrentCardsData] = useState(cards)

  // const randomlySortedCardsDataArray = cards.sort(() => 0.5 - Math.random())

  const randomlySortedCardsDataArray = () => {
    setCurrentCardsData(prev => [...prev].sort(() => 0.5 - Math.random()))
  }

  useEffect(() => setCurrentCardsData(prev => [...prev].sort(() => 0.5 - Math.random())), [])



  return (
    <>
      <div className='h-screen flex flex-col gap-4 justify-center items-center font-applyConcert text-2xl'>
        <h1 className='text-3xl text-indigo-500'>CARD MATCH GAME</h1>
        <button onClick={() => randomlySortedCardsDataArray()}
          className={`${buttonShadowEffect} bg-indigo-500 text-white rounded-md px-3 py-1.5`}>RESTART</button>
        <div>0/52 CARDS MATCHED</div>
        <div className='w-1/2 flex flex-wrap gap-2 justify-center'>
          {currentCardsData.map((cardDetail, i) => {
            const color = cardDetail.color === "red" ? "text-red-600" : "text-black"

            return <div className={`w-20 py-4 px-2 rounded-md border border-1`}>
              <div className='flex flex-col items-center'>
                <div className={`${color}`}>{cardDetail.num}</div>
                <div className={`${color}`}>{cardDetail.type}</div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}
