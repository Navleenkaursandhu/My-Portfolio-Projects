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
import { compareAsc, compareDesc, parseISO } from 'date-fns'

const projects = [
  {
    title: 'E-COMMERCE WEBSITE',
    description: <div>
      <p>E-commerce has changed the way people shop products and services. Inspired from the e-commerce websites which we use in
      our day to day life, I have created my own fully-functional e-commerce shopping website using combination of technologies.
      The front-end of the website was built using React, a popular JavaScript library for building user interfaces,
      along with React Router for managing routing and navigation within the app. I also used Tailwind CSS, a utility-first CSS
      framework, to style the website and make it look more professional. For the database, I used Dexie, a powerful in-browser database.
      Also, the graphic design for the entire website was initially done in Figma. In order to view my website design, please visit: ''</p>

      <p>One of the most complex aspects of this project was implementing the user authentication and authorization system.
      This involved creating routes and components for signing up, logging in, and managing user accounts. I also had to
      securely store user passwords and implement password hashing to protect user data. Additionally, I had to create a
      system for managing user orders and displaying order history along with adding responsive design to the website.
      Overall, this project was a challenging and rewarding experience that allowed me to learn and apply a wide range of
      technologies to create a functional e-commerce shopping website.</p>
    </div>,
    skills: ['Figma', 'Graphic Design', 'ReactJS', 'Vite', 'Tailwind CSS', 'Dexie.js', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design'],
    date: parseISO('2022-12'),
    link: 'https://ecommerce.navleenbrar.com/',
    githubLink: 'https://github.com/Navleenkaursandhu/E-Commerce-Website'
  },
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

  if (isAscending && selectedOption === 'precedence') {
    sortedProjects.reverse()
  }

  if (isAscending && selectedOption === 'month') {
    sortedProjects.sort(((a, b) => compareAsc(a.date, b.date)) as any)
  }

  return (
    <>
      <div className="flex flex-col text-[#371064] items-center mt-16 pt-8 pb-10 mx-8 rounded-2xl">
        <div className="font-bold lg:text-3xl md:text-2xl text-xl">
          REACT PROJECTS
        </div>

        <SortProjects value={selectedOption} onChange={callback} ascending={isAscending} onAscendingChange={() => setIsAscending(!isAscending)} />

        {sortedProjects.map((project, i) => {
          return <ProjectDetails key={i} details={project} />
        })}
      </div>
    </>
  )
}
