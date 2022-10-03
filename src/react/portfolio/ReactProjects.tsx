import gitImage from './assets/github.png'
import * as TodoListData from '../reactProject_TODOList/main'
import * as TipCalculatorData from '../reactProject_TipCalculator/main'
import * as WeatherAppData from '../react_project_WeatherApp/main'
import * as WeddingCardData from '../react_project_WeddingCard/Main'
import * as DictionaryData from '../reactProject_DictionaryApp/main'
import * as TimesheetData from '../react_project_Timesheet/Main'
import * as AnalogClockData from '../reactProject_AnalogSVGClock/main'
import * as LCDClockData from '../reactProject_LCDClock/main'
import * as DailyDiaryData from '../react_project_DailyDiary/Main'
import * as CurrencyConverterData from '../react_project_currencyConvertor/main'
import * as HangmanGameData from '../reactProject_Hangman/main'
import * as RPSData from '../reactProject_RPS/main'
import * as SimonSaysData from '../reactProject_SimonSays/main'
import * as TicTacToeData from '../reactProject_TicTacToe/main'

const projects = [
  WeatherAppData,
  WeddingCardData,
  DictionaryData,
  AnalogClockData,
  TimesheetData,
  DailyDiaryData,
  LCDClockData,
  CurrencyConverterData,
  TipCalculatorData,
  HangmanGameData,
  RPSData,
  SimonSaysData,
  TicTacToeData,
  TodoListData
]

export const ReactProjects = () => {
  return (
    <>
      <div className="flex flex-col text-[#371064] items-center mt-16 pt-8 pb-10 mx-8 rounded-2xl">
        <div className="font-bold text-3xl">
         REACT PROJECTS
        </div>

        {projects.map((project, i) => {
          return <div key={i} className='gap-2 px-8 py-8 w-1/2 border-b border-slate-400'>
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

              <div className='flex gap-3 mt-4'>
                <div className='bg-indigo-500 shadow-[4px_4px_0px_0px_#4f46e5] font-bold  rounded-md px-2 py-1 text-white'>
                  <a className='flex items-center gap-2 ' href={project.link}>View<span className="text-white material-symbols-rounded">
                    open_in_new
                  </span></a>
                </div>

                <div className='bg-indigo-500 shadow-[4px_4px_0px_0px_#4f46e5] font-bold rounded-md px-2 py-1 text-white'>
                  <a className='flex items-center gap-2' href={project.githubLink}>GitHub
                    <span>
                      <img className='w-6 brightness-0 invert' src={gitImage} />
                    </span>
                  </a>
                </div>
              </div>
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
        </div>
      </div>
    </>
  )
}
