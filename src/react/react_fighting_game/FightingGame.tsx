import playerA from './assets/playerA.gif'
import playerB from './assets/playerB.gif'

export const FightingGame = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4 border border-black">
        <div>
          lifelines
        </div>

        <div>
          <div className='flex justify-center w-full'>
            <img className=' sm:h-auto sm:w-auto h-32 sm:ml-16' src={playerA} />
            <img className=' sm:h-auto sm:w-auto h-32' src={playerB} />
          </div>
          <div className='-mt-3.5 rounded-[50%] h-8 bg-gradient-to-b from-lime-400 to-amber-200'></div>
        </div>

        <div>
          buttons
        </div>
      </div>
      
    </>
  )
}
