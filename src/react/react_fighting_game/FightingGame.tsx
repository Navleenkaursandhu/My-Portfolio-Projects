import playerA from './assets/playerA.gif'
import playerB from './assets/playerB.gif'
import { buttonShadowEffect } from '../common/tailwind_constants'

export const FightingGame = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4 border border-black sm:text-xl text-sm">
        <div>
          lifelines
        </div>

        <div>
          <div className='flex justify-center'>
            <img className=' sm:h-auto sm:w-auto h-32 sm:ml-16' src={playerA} />
            <img className=' sm:h-auto sm:w-auto h-32' src={playerB} />
          </div>
          <div className='-mt-3.5 rounded-[50%] h-8 bg-gradient-to-b from-emerald-100 via-lime-400 to-amber-200'></div>
        </div>

        <div className='flex border border-black lg:w-1/2 w-full sm:p-0 px-4 sm:justify-between justify-center sm:gap-0 gap-16'>
          <table className='border-separate sm:border-spacing-x-10 sm:border-spacing-y-6 border-spacing-y-4 border-spacing-x-2'>
            <tr>
              <td>ATTACK</td>
              <td className='sm:w-14 sm:h-14 h-6 w-6 flex items-center justify-center bg-slate-200 rounded-md'>A</td>
            </tr>
            <tr>
              <td>LIFELINE</td>
              <td className='sm:w-14 sm:h-14 h-6 w-6 flex items-center justify-center bg-slate-200 rounded-md'>Z</td>
            </tr>
          </table>

          <table className='border-separate sm:border-spacing-x-10 sm:border-spacing-y-6 border-spacing-y-4 border-spacing-x-2'>
            <tr>
              <td className='sm:w-14 sm:h-14 h-6 w-6 flex items-center justify-center bg-slate-200 rounded-md '>L</td>
              <td>ATTACK</td>
            </tr>
            <tr>
              <td className='sm:w-14 sm:h-14 h-6 w-6 flex items-center justify-center bg-slate-200 rounded-md'>M</td>
              <td>LIFELINE</td>
            </tr>
          </table>
        </div>

        <div className='flex flex-col gap-6 items-center'>
          <button className={`${buttonShadowEffect} bg-indigo-400 px-5 py-1.5 rounded-md text-white font-semibold`}>RESTART</button>
          <div>LET&apos;S PLAY!</div>
        </div>
      </div>

    </>
  )
}
