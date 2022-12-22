import { cards } from './cardsData'
import { buttonShadowEffect } from '../common/tailwind_constants'
import { useEffect, useState } from 'react'
import gameOverMusic from './assets/gameOver.mp3'
import successMusic from './assets/success.mp3'

export const CardMatchGame = () => {
  const [successAudio] = useState(new Audio(successMusic))
  const [gameOverAudio] = useState(new Audio(gameOverMusic))
  const [currentCardsData, setCurrentCardsData] = useState(cards)
  const [currentCardClicked, setCurrentCardClicked] = useState([])
  const [matchingCards, setMatchingCards] = useState([])

  const randomlySortedCardsDataArray = () => {
    setCurrentCardClicked([])
    setMatchingCards([])
    setCurrentCardsData(prev => [...prev].sort(() => 0.5 - Math.random()))
  }

  useEffect(() => {
    if (matchingCards.length === 52) {
      void gameOverAudio.play()
    }
    if (matchingCards.length >= 2 && matchingCards.length !== 52) {
      void successAudio.play()
    }
  }, [matchingCards])

  useEffect(() => {
    setCurrentCardsData(prev => [...prev].sort(() => 0.5 - Math.random()))
  }, [])

  return (
    <>
      <div className='h-screen flex flex-col gap-4 justify-center items-center font-applyConcert text-2xl'>
        <h1 className='text-3xl text-indigo-500'>CARD MATCH GAME</h1>
        <button onClick={() => randomlySortedCardsDataArray()}
          className={`${buttonShadowEffect} bg-indigo-500 text-white rounded-md px-3 py-1.5`}>RESTART</button>
        <div>{matchingCards.length}/52 CARDS MATCHED</div>
        <div className='w-1/2 flex flex-wrap gap-2 justify-center'>
          {!!currentCardsData && currentCardsData.map((cardDetail, i) => {
            const color = cardDetail.color === 'red' ? 'text-red-600' : 'text-black'

            const isCardClicked = currentCardClicked.includes(cardDetail)

            const matchedCardsColor = matchingCards.includes(cardDetail) ? 'bg-indigo-200' : 'bg-white'

            if (isCardClicked || matchingCards.includes(cardDetail)) {
              return <div key={i} className={`flex items-center justify-center w-20 h-24 py-4 px-2 rounded-lg border-4 border-indigo-400 ${matchedCardsColor} ${color}`}>
                <div className='flex flex-col'>
                  <div>{cardDetail.num}</div>
                  <div>{cardDetail.type}</div>
                </div>
              </div>
            } else {
              return <div onClick={() => {
                const prevClickedCard = currentCardClicked[currentCardClicked.length - 1]
                if (prevClickedCard && cardDetail.num === prevClickedCard.num && cardDetail.color === prevClickedCard.color) {
                  setMatchingCards(prev => prev.concat(cardDetail, prevClickedCard))
                  setCurrentCardClicked([])
                } else {
                  setCurrentCardClicked(prev => {
                    if (prev.length >= 2) {
                      prev.shift()
                    }
                    return prev.concat(cardDetail)
                  })
                }
              }}
                key={i} className="flex items-center justify-center w-20 h-24 py-4 px-2 rounded-md border border-1 bg-indigo-400">
              </div>
            }
          })}
        </div>
      </div>
    </>
  )
}
