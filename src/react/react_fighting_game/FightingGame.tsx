import playerA from './assets/playerA.gif'
import playerB from './assets/playerB.gif'
import { buttonShadowEffect } from '../common/tailwind_constants'

export const FightingGame = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4 border border-black sm:text-xl">
        <div>
          lifelines
        </div>

        <div>
          <div className='flex justify-center w-full'>
            <img className=' sm:h-auto sm:w-auto h-32 sm:ml-16' src={playerA} />
            <img className=' sm:h-auto sm:w-auto h-32' src={playerB} />
          </div>
          <div className='-mt-3.5 rounded-[50%] h-8 bg-gradient-to-b from-emerald-100 via-lime-400 to-amber-200'></div>
        </div>

        <div className='flex flex-col gap-6 items-center'>
          <button className={`${buttonShadowEffect} bg-indigo-400 px-5 py-1.5 rounded-md text-white font-semibold`}>RESTART</button>
          <div>LET&apos;S PLAY!</div>
        </div>
      </div>

    </>
  )
}
