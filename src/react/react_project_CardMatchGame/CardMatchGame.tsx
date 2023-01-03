import { cards } from './cardsData'
import { buttonShadowEffect } from '../common/tailwind_constants'
import { useEffect, useState } from 'react'
import gameOverMusic from './assets/gameOver.mp3'
import successMusic from './assets/success.mp3'
import { parseISO } from 'date-fns'

export const id = 'react-cardmatchgame'
export const title = 'CARD MATCH GAME'
export const description = <div>
  Level up your concentration with this online memory card game App. Start the game by flipping a card.
  Try to find pairs with matching numbers and colors. The cards with same number
  and color make a pair (such as 2 of hearts and 2 of diamonds will make a pair). If you can&apos;t find a pair,
  the cards are flipped back face down. Remember the images and use your memory to find pairs as you progress
  through the game. When you find a pair, the cards will remain facing up on the board. The game ends once all
  pairs are found. Try out this game as this fun and interactive app is a great way to exercise your memory skills.
</div>
export const skills = ['React', 'Vite', 'TailwindCSS', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-12')
export const link = '/CardMatchGame'
export const githubLink = 'https://github.com/brar-navleen/My-Portfolio-Projects/tree/main/src/react/react_project_CardMatchGame'

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
      <div className=' flex flex-col gap-4 justify-center items-center font-applyConcert sm:text-2xl text-xl'>
        <h1 className='sm:text-3xl text-2xl text-center'>CARD MATCH GAME</h1>
        <button onClick={() => randomlySortedCardsDataArray()}
          className={`${buttonShadowEffect} bg-indigo-500 text-white rounded-md px-3 py-1.5`}>RESTART</button>
        <div className='text-center'>{matchingCards.length}/52 CARDS MATCHED</div>
        <div className='xl:w-1/2 lg:w-3/5 md:w-3/4 w-full flex flex-wrap gap-2 justify-center'>
          {!!currentCardsData && currentCardsData.map((cardDetail, i) => {
            const color = cardDetail.color === 'red' ? 'text-red-600' : 'text-black'

            const isCardClicked = currentCardClicked.includes(cardDetail)

            const matchedCardsColor = matchingCards.includes(cardDetail) ? 'bg-indigo-200' : 'bg-white'

            if (isCardClicked || matchingCards.includes(cardDetail)) {
              return <div key={i} className={`flex items-center justify-center sm:w-20 sm:h-24 w-10 h-12 py-4 px-2 rounded-lg border-4 border-indigo-400 ${matchedCardsColor} ${color}`}>
                <div className='flex flex-col justify-center items-center'>
                  <div className='sm:text-2xl text-sm'>{cardDetail.num}</div>
                  <div className='sm:text-2xl text-sm'>{cardDetail.type}</div>
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
                key={i} className="flex items-center justify-center sm:w-20 sm:h-24 w-10 h-12 py-4 px-2 rounded-md border border-1 bg-indigo-400">
              </div>
            }
          })}
        </div>
      </div>
    </>
  )
}
