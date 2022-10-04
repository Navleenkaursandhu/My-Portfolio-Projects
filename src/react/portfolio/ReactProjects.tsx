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
import { ProjectDetails } from './ProjectDetails'

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
          return <ProjectDetails key={i} details={project} />
        })}

        {/* <div>
          <a className="block" href="./project_q40">Project: Hello &quot;First Name&quot;</a>
          <a className="block" href='./project_q41'>Project 41: Generate Random Numbers</a>
          <a className="block" href="./project_q42">Project 42: Generate random number between range</a>
          <a className="block" href='./project_q43'>Project 43: Generate count of random numbers within range</a>
          <a className="block" href="./project_q44">Project 44: Generate many strings with random characters</a>
          <a className="block" href='./project_q46'>Project 46: Calculator</a>
          <a className="block" href='./project_q47'>Project 47: Counter</a>
        </div> */}
      </div>
    </>
  )
}
