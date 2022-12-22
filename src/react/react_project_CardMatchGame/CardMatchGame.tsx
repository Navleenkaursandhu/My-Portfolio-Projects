import { cards } from './cardsData'
import { buttonShadowEffect } from '../common/tailwind_constants'
import { useEffect, useState } from 'react'

export const CardMatchGame = () => {
  const [currentCardsData, setCurrentCardsData] = useState(cards)
  const [currentCardClicked, setCurrentCardClicked] = useState([])

  const randomlySortedCardsDataArray = () => {
    setCurrentCardsData(prev => [...prev].sort(() => 0.5 - Math.random()))
  }

  useEffect(() => setCurrentCardsData(prev => [...prev].sort(() => 0.5 - Math.random())), [])

  console.log(currentCardClicked)

  return (
    <>
      <div className='h-screen flex flex-col gap-4 justify-center items-center font-applyConcert text-2xl'>
        <h1 className='text-3xl text-indigo-500'>CARD MATCH GAME</h1>
        <button onClick={() => randomlySortedCardsDataArray()}
          className={`${buttonShadowEffect} bg-indigo-500 text-white rounded-md px-3 py-1.5`}>RESTART</button>
        <div>0/52 CARDS MATCHED</div>
        <div className='w-1/2 flex flex-wrap gap-2 justify-center'>
          {currentCardsData && currentCardsData.map((cardDetail, i) => {
            const color = cardDetail.color === 'red' ? 'text-red-600' : 'text-black'
            let cardClicked = !!currentCardClicked.length && currentCardClicked.filter((clickedCard, i) => clickedCard.type === cardDetail.type && clickedCard.num === cardDetail.num && clickedCard.color === cardDetail.color)

            if(!!cardClicked.length){
              return <div key={i} className={`flex items-center justify-center w-20 h-24 py-4 px-2 rounded-md border border-1 ${color}`}>
              <div className='flex flex-col'>
                <div>{cardDetail.num}</div>
                <div>{cardDetail.type}</div>
              </div>
            </div>
            }
            else{
              return <div onClick={() => setCurrentCardClicked(prev => {
                if(prev.length >=2){
                  prev.shift()
                }
               return  prev.concat(cardDetail)
              })} 
                key={i} className={`flex items-center justify-center w-20 h-24 py-4 px-2 rounded-md border border-1 bg-indigo-400`}>
             
            </div>
            }
            
          })}
        </div>
      </div>
    </>
  )
}
