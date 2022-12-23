import playerA from './assets/playerA.gif'
import playerB from './assets/playerB.gif'
import { buttonShadowEffect } from '../common/tailwind_constants'

export const FightingGame = () => {
  const fightingButtonsStyle = 'sm:w-14 sm:h-14 h-6 w-6 flex items-center justify-center bg-slate-200 rounded-md border border-slate-500'
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 lg:text-2xl sm:text-xl text-sm sm:p-4 p-1.5">
        <h1 className='font-semibold mb-3'>STREET FIGHTING GAME</h1>
        <div className='flex flex-row sm:gap-4 gap-1 sm:w-4/5 w-full'>
          <div className='flex-1'>
            <div className='sm:hidden visible flex w-full justify-end'>
              PLAYER A
            </div>
            <div className='flex flex-row justify-between items-center'>
              <div>100</div>
              <div className='flex flex-row items-center sm:gap-2'>
                <div className='sm:inline hidden'>PLAYER A</div>
                <span className="material-symbols-rounded sm:text-6xl text-4xl">
                  arrow_right
                </span>
              </div>
            </div>
            <div className='w-full bg-gradient-to-r from-lime-400 via-amber-100 to-lime-100 sm:h-1/2 h-2/6'></div>
          </div>
          <div className='border border-indigo-500 flex justify-center items-center rounded-md w-14 py-2 px-5 bg-indigo-400 text-white font-semibold'>0</div>
          <div className='flex-1'>
            <div className='sm:hidden inline'>PLAYER B</div>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-row items-center gap-2'>
                <span className="material-symbols-rounded sm:text-6xl text-4xl">
                  arrow_left
                </span>
                <div className='sm:inline hidden'>PLAYER B</div>
              </div>
              <div>100</div>
            </div>
            <div className='w-full bg-gradient-to-r from-lime-100 via-amber-100 to-lime-400 sm:h-1/2 h-2/6'></div>
          </div>
        </div>

        <div>
          <div className='flex justify-center'>
            <img className=' sm:h-auto sm:w-auto h-32 sm:ml-16' src={playerA} />
            <img className=' sm:h-auto sm:w-auto h-32' src={playerB} />
          </div>
          <div className='-mt-3.5 rounded-[50%] h-8 bg-gradient-to-b from-lime-400 via-amber-100'></div>
        </div>

        <div className='flex lg:w-1/2 w-full sm:p-0 px-4 sm:justify-between justify-center sm:gap-0 gap-16'>
          <table className='border-separate sm:border-spacing-x-10 sm:border-spacing-y-6 border-spacing-y-4 border-spacing-x-2'>
            <tbody>
              <tr>
                <td>ATTACK</td>
                <td className={fightingButtonsStyle}>A</td>
              </tr>
              <tr>
                <td>LIFELINE</td>
                <td className={fightingButtonsStyle}>Z</td>
              </tr>
            </tbody>
          </table>

          <table className='border-separate sm:border-spacing-x-10 sm:border-spacing-y-6 border-spacing-y-4 border-spacing-x-2'>
            <tbody>
              <tr>
                <td className={fightingButtonsStyle}>L</td>
                <td>ATTACK</td>
              </tr>
              <tr>
                <td className={fightingButtonsStyle}>M</td>
                <td>LIFELINE</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='flex flex-col gap-6 items-center'>
          <button className={`${buttonShadowEffect} bg-indigo-400 px-5 py-1.5 rounded-md text-white font-semibold border border-indigo-500`}>RESTART</button>
          <div>LET&apos;S PLAY!</div>
        </div>
      </div>

    </>
  )
}
