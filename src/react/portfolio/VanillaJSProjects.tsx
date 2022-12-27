import { ReactReimplementationRedirect } from './ReactReimplementationRedirect'
import { ProjectDetails } from './ProjectDetails'
import { id as reactAnalogClockID } from '../reactProject_AnalogSVGClock/main'
import { id as reactLCDClockID } from '../reactProject_LCDClock/main'
import { id as reactTODOListID } from '../reactProject_TODOList/main'
import { id as reactHangmanGameID } from '../reactProject_Hangman/main'
import { id as reactSimonSaysGameID } from '../reactProject_SimonSays/main'
import { id as reactTicTacToeGameID } from '../reactProject_TicTacToe/main'
import { id as reactRPSGameID } from '../reactProject_RPS/main'
import { id as reactTipCalculatorID } from '../reactProject_TipCalculator/main'
import { id as reactFightingGameID } from '../react_fighting_game/FightingGame'
import { id as reactCardMatchGameID } from '../react_project_CardMatchGame/CardMatchGame'
import { SortProjects } from './SortProjects'
import { useState } from 'react'
import { compareAsc, compareDesc, parseISO } from 'date-fns'

const projects = [
  {
    id: 'vanillajs-cardmatchgame',
    title: 'CARD MATCH GAME',
    description: <ReactReimplementationRedirect link={reactCardMatchGameID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-08'),
    link: '/vanilla_js/CardMatch/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/CardMatch'
  },
  {
    id: 'vanillajs-fightinggame',
    title: 'STREET FIGHTING GAME',
    description: <div>
      <ReactReimplementationRedirect link={reactFightingGameID} />
      <p className='bg-yellow-100 italic p-4 flex align-center gap-2 mt-4 mb-4 rounded-md'>
        <span className="material-symbols-rounded">
          warning
        </span>
        Please note that the JS implementation of this game has 3 rounds in total and in order to play this game the user needs to press keyboard
        alphabet keys to take actions during fight.
      </p>
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-07'),
    link: '/vanilla_js/fighting_game/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/fighting_game'
  },
  {
    id: 'vanillajs-calender',
    title: 'CALENDER',
    description: <div>
      Keep track of the current date and stay organized with our digital calendar app. This environmentally-friendly
      solution allows you to view the number of days in each month without the need for paper. Simply check the app
      to stay updated and never flip through pages again.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-08'),
    link: '/vanilla_js/Calender/calender.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/Calender'
  },
  {
    id: 'vanillajs-analogclock',
    title: 'ANALOG SVG CLOCK',
    description: <ReactReimplementationRedirect link={reactAnalogClockID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'SVG', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-08'),
    link: '/vanilla_js/analogClock/clock.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/analogClock'
  },
  {
    id: 'vanillajs-lcdclock',
    title: 'LCD CLOCK',
    description: <ReactReimplementationRedirect link={reactLCDClockID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-08'),
    link: '/vanilla_js/LCDClock/clock.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/LCDClock'
  },
  {
    id: 'vanillajs-hangmangame',
    title: 'GUESS THE WORD',
    description: <ReactReimplementationRedirect link={reactHangmanGameID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-08'),
    link: '/vanilla_js/HangmanGame/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/HangmanGame'
  },
  {
    id: 'vanillajs-simonsaysgame',
    title: 'SIMON SAYS GAME',
    description: <ReactReimplementationRedirect link={reactSimonSaysGameID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-08'),
    link: '/vanilla_js/SimonSays/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/SimonSays'
  },
  {
    id: 'vanillajs-tictactoegame',
    title: 'TIC TAC TOE GAME',
    description: <ReactReimplementationRedirect link={reactTicTacToeGameID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-08'),
    link: '/vanilla_js/tic_tac_toe/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/tic_tac_toe'
  },
  {
    id: 'vanillajs-rpsgame',
    title: 'ROCK PAPER SCISSORS GAME',
    description: <div><ReactReimplementationRedirect link={reactRPSGameID} />
      <p className='bg-yellow-100 italic p-4 flex align-center gap-2 mt-4 mb-4 rounded-md'>
        <span className="material-symbols-rounded">
          warning
        </span>
        Please note that instead of 5, the game has 1 round in its JS implementation below.
      </p>
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-07'),
    link: '/vanilla_js/rock_paper_scissors/rps.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/rock_paper_scissors'
  },
  {
    id: 'vanillajs-todolist',
    title: 'TODO LIST',
    description: <ReactReimplementationRedirect link={reactTODOListID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-08'),
    link: '/vanilla_js/TODOList/list.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/TODOList'
  },
  {
    id: 'vanillajs-tipcalculator',
    title: 'TIP CALCULATOR',
    description: <ReactReimplementationRedirect link={reactTipCalculatorID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-07'),
    link: '/vanilla_js/tip_calculator/code.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/tip_calculator'
  },
  {
    id: 'vanillajs-bankaccount',
    title: 'BANK ACCOUNT',
    description: <div>
      Take a glimpse of this simple bank account App. The user can define the amount to be deposited or
      withdrawn and, with a single click, the customers account balance is adjusted automatically.
      If the user tries to withdraw unrealistic amount higher than their account balance then the app displays
      an error message stating that the user can not withdraw the desired amount.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-07'),
    link: '/vanilla_js/bank_account/bank.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/bank_account'
  },
  {
    id: 'vanillajs-healthcarewebpage',
    title: 'HEALTH CARE WEBPAGE',
    description: <div>
      I thoroughly enjoyed building this static healthcare web app, which served as my first proper project.
      Working on this project not only boosted my confidence as a developer, but also served as a stepping
      stone towards my goal of becoming a web developer. Please note that no JS was used in the creation of this static app.
    </div>,
    skills: ['CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-07'),
    link: '/vanilla_js/health_care_webpage/health_webpage.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/health_care_webpage'
  },
  {
    id: 'vanillajs-loginwebpage',
    title: 'LOGIN WEB PAGE',
    description: <div>
      This project is a simple demonstration of a static login page comprising of various interactable elements
      like input fields, buttons and links. None of the elements do anything because no javascript was used in
      this project. However, this project was invaluable in giving greater confidence while learning foundational
      HTML and CSS skills.
    </div>,
    skills: ['CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: parseISO('2022-07'),
    link: '/vanilla_js/login_webpage/Login.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/login_webpage'
  }
]

export const VanillaJSProjects = () => {
  const [isAscending, setIsAscending] = useState(false)
  const [selectedOption, setSelectedOption] = useState('precedence')
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
          VANILLA JS PROJECTS
        </div>

        <SortProjects value={selectedOption} onChange={callback} ascending={isAscending} onAscendingChange={() => setIsAscending(!isAscending)} />

        <div className='flex lg:w-2/3 md:w-11/12 w-full rounded-md gap-2 lg:text-xl md:text-lg text-md bg-yellow-100 p-4 mt-6'><span className="material-symbols-rounded">
          warning
        </span>Please note that these projects are not optimised for tablet and mobile screens.</div>

        {sortedProjects.map((project, i) => {
          return <ProjectDetails key={i} details={project} />
        })}
      </div>
    </>
  )
}
