import gitImage from './assets/github.png'
import * as TodoListData from '../reactProject_TODOList/main'
import * as TipCalculatorData from '../reactProject_TipCalculator/main'

const projects = [
  TodoListData, TipCalculatorData
]

export const ReactProjects = () => {
  console.log(projects)
  return (
    <>
      <div className="flex flex-col text-[#371064] items-center mt-16 pt-8 pb-10 mx-8 rounded-2xl">
        <div className="font-bold text-3xl">
          PROJECTS
        </div>

        {projects.map((project, i) => {
          return <div key={i} className='my-8 gap-2 px-8 py-2 w-1/2'>
            <div>
              <div className='font-bold text-xl'>{project.title}</div>

              <div className='flex flex-wrap gap-2'>
                {project.skills.map((skill) => {
                  return <div key={i} className='border-2 bg-slate-100 border-slate-300 rounded-md px-4 my-2'>{skill}</div>
                })}
              </div>

              <div className='flex items-start gap-2'><span className="material-symbols-rounded">
                description
              </span>{project.description}</div>

              <div className='mt-2 flex items-center gap-2'><span className="material-symbols-rounded">
                date_range
              </span>{project.date}</div>

              <div className='flex gap-2 mt-4'>
                <div className='bg-indigo-500 shadow-[4px_4px_0px_0px_#4f46e5] font-bold  rounded-md px-2 py-1 text-white'>
                  <a className='flex items-center gap-2 ' href={project.link}>Open Project<span className="text-white material-symbols-rounded">
                    open_in_new
                  </span></a>
                </div>

                <div className='bg-indigo-500 shadow-[4px_4px_0px_0px_#4f46e5] font-bold rounded-md px-2 py-1 text-white'>
                  <a className='flex items-center gap-2' href={project.githubLink}>Open Project on GitHub
                    <span>
                      <img className='w-6 brightness-0 invert' src={gitImage} />
                    </span>
                  </a>
                </div>
              </div>

              <div className='w-full mt-2 border bg-slate-500'></div>
            </div>

          </div>
        })}

        <div>
          <a className="block" href="./project_q40">Project: Hello &quot;First Name&quot;</a>
          <a className="block" href='./project_q41'>Project 41: Generate Random Numbers</a>
          <a className="block" href="./project_q42">Project 42: Generate random number between range</a>
          <a className="block" href='./project_q43'>Project 43: Generate count of random numbers within range</a>
          <a className="block" href="./project_q44">Project 44: Generate many strings with random characters</a>
          <a className="block" href='./project_q46'>Project 46: Calculator</a>
          <a className="block" href='./project_q47'>Project 47: Counter</a>
          <a className="block" href="./reactProject_TODOList">Project: TODO List</a>
          <a className="block" href="./RockPaperScissors" >React Project: Rock Paper Scissors</a>
          <a className="block" href="./TipCalculator">React Project: Tip Calculator</a>
          <a className="block" href='./TicTacToe'>React Project: Tic Tac Toe</a>
          <a className="block" href="./LCDClock">React Project: LCD Clock</a>
          <a className="block" href="./AnalogSVGClock">React Project: Analog SVG Clock</a>
          <a className="block" href="./HangmanGame">React Project: Hangman Game</a>
          <a className="block" href="./SimonSaysGame">React Project: Simon Says </a>
          <a className="block" href="./Dictionary">React Project: Dictionary</a>
          <a className="block" href="./WeatherApp">React Project: Weather Forecast Application</a>
          <a className="block" href="./CurrencyConvertor">React Project: Currency Convertor</a>
          <a className="block" href="./DailyDiary">React Project: Daily Diary</a>
          <a className="block" href='./Timesheet'>React Project: Timesheet</a>
          <a className="block" href="./WeddingCard">React Project: Wedding Card</a>
        </div>
      </div>
    </>
  )
}
