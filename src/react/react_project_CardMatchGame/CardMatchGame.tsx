import { cards } from './cardsData'
import { buttonShadowEffect } from '../common/tailwind_constants'

export const CardMatchGame = () => {
  return (
    <>
      <div className='h-screen flex flex-col gap-4 justify-center items-center font-applyConcert text-2xl'>
        <h1 className='text-3xl text-indigo-500'>CARD MATCH GAME</h1>
        <button className={`${buttonShadowEffect} bg-indigo-500 text-white rounded-md px-3 py-1.5`}>RESTART</button>

      </div>
    </>
  )
}
