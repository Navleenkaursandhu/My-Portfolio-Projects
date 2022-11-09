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
import * as PortfolioData from '../portfolio/PortfolioPage'
import { ProjectDetails } from './ProjectDetails'
import { SortProjects } from './SortProjects'
import { useState } from 'react'
import { compareDesc } from 'date-fns'

const projects = [
  PortfolioData,
  WeatherAppData,
  DictionaryData,
  LCDClockData,
  AnalogClockData,
  HangmanGameData,
  WeddingCardData,
  TimesheetData,
  DailyDiaryData,
  CurrencyConverterData,
  SimonSaysData,
  RPSData,
  TicTacToeData,
  TipCalculatorData,
  TodoListData
]

export const ReactProjects = () => {
  const [isAscending, setIsAscending] = useState(false)
 
  const [selectedOption, setSelectedOption] = useState('precedence')
 
  console.log(isAscending)
 
  const callback = (selectedElement) => {
    setSelectedOption(selectedElement)
  }

  const sortedProjects = [...projects]
  if (selectedOption === 'month') {
    sortedProjects.sort(((a, b) => compareDesc(a.date, b.date)) as any)
  }

  return (
    <>
      <div className="flex flex-col text-[#371064] items-center mt-16 pt-8 pb-10 mx-8 rounded-2xl">
        <div className="font-bold lg:text-3xl md:text-2xl text-xl">
          REACT PROJECTS
        </div>

        <SortProjects value={selectedOption} onChange={callback} ascending={isAscending} onAscendingChange={() => setIsAscending(!isAscending)}/>

        {sortedProjects.map((project, i) => {
          return <ProjectDetails key={i} details={project} />
        })}
      </div>
    </>
  )
}
