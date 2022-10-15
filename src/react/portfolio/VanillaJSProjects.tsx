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
const projects = [
  {
    id: 'vanillajs-calender',
    title: 'CALENDER',
    description: <div>
      For those who still prefer to rely on a calendar to check the date, here&apos;s a digital calender app that highlights the
      current date and keeps you and everyone in your family updated with number of days in each and every month of the year.
      Most importantly, no paper is used in this process and you no longer require to toss and turn the pages to find the correct
      date on calender. The App does it for you!
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/vanilla_js/Calender/calender.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/Calender'
  },
  {
    id: 'vanillajs-analogclock',
    title: 'ANALOG SVG CLOCK',
    description: <ReactReimplementationRedirect link={reactAnalogClockID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'SVG', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/vanilla_js/analogClock/clock.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/analogClock'
  },
  {
    id: 'vanillajs-lcdclock',
    title: 'LCD CLOCK',
    description: <ReactReimplementationRedirect link={reactLCDClockID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/vanilla_js/LCDClock/clock.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/LCDClock'
  },
  {
    id: 'vanillajs-todolist',
    title: 'TODO LIST',
    description: <ReactReimplementationRedirect link={reactTODOListID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/vanilla_js/TODOList/list.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/TODOList'
  },
  {
    id: 'vanillajs-cardmatchgame',
    title: 'CARD MATCH GAME',
    description: <div>
      Level up your concentration with this online memory card game App. Start the game by flipping a card.
      Try to find another card that has the same number and color as the first. The cards with same number
      and color make a pair (such as 2 of hearts and 2 of diamonds will make a pair). If you can&apos;t find a pair, the flipped
      cards will be flipped back with the face down. Try to remember these images as it becomes easier to find pairs
      the longer you play. When you find a pair the cards will remain facing up on the board. The game is complete
      once you find all the pairs. This game is a great exercise to train your memory in a playful way and most
      of you will love playing this card matching game.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/vanilla_js/CardMatch/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/CardMatch'
  },
  {
    id: 'vanillajs-hangmangame',
    title: 'GUESS THE WORD',
    description: <ReactReimplementationRedirect link={reactHangmanGameID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/vanilla_js/HangmanGame/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/HangmanGame'
  },
  {
    id: 'vanillajs-simonsaysgame',
    title: 'SIMON SAYS GAME',
    description: <ReactReimplementationRedirect link={reactSimonSaysGameID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/vanilla_js/SimonSays/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/SimonSays'
  },
  {
    id: 'vanillajs-tictactoegame',
    title: 'TIC TAC TOE GAME',
    description: <ReactReimplementationRedirect link={reactTicTacToeGameID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/vanilla_js/tic_tac_toe/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/tic_tac_toe'
  },
  {
    id: 'vanillajs-fightinggame',
    title: 'STREET FIGHTING GAME',
    description: <div>
      Want to play something exciting? Try this 1-on-1 fighting game with your friend on your computer using your keyboard.
      The rules
      are pretty simple. The game has 3 rounds in total. To start the game Player A takes the first round followed by player B and so forth. It will be the player&apos;s choice whether
      he/she wants to hit the opponent or take a lifeline during his/her round (remember there is no point of taking
      a lifeline in your first round as it&apos;s already 100%). On hit, opponents health will reduce by a random number (the damage will be reflected by red bar)
      and on selecting lifeline the current player&apos;s health increases by random number (health is reflected by green bar). After
      3rd round the player with good health wins the battle.
      <p className='bg-yellow-100 italic p-4 flex align-center gap-2 mt-4 mb-4 rounded-md'>
        <span className="material-symbols-rounded">
          warning
        </span>
        Please note that in order to play this game you need to press your keyboard alphabets to take actions during fight.
      </p>
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'July 2022 - August 2022',
    link: '/vanilla_js/fighting_game/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/fighting_game'
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
    date: 'July 2022',
    link: '/vanilla_js/rock_paper_scissors/rps.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/rock_paper_scissors'
  },
  {
    id: 'vanillajs-tipcalculator',
    title: 'TIP CALCULATOR',
    description: <ReactReimplementationRedirect link={reactTipCalculatorID} />,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'July 2022',
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
    date: 'July 2022',
    link: '/vanilla_js/bank_account/bank.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/bank_account'
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
    date: 'July 2022',
    link: '/vanilla_js/login_webpage/Login.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/login_webpage'
  },
  {
    id: 'vanillajs-healthcarewebpage',
    title: 'HEALTH CARE WEBPAGE',
    description: <div>
      Had a great experience building this static health care web App. This App was my first ever proper project.
      Working on this project not only boosted my confidence to code but also served as a stepping stone towards
      achieving my goal of becoming a web developer. None of the elements do anything because no javascript was used in this project.
    </div>,
    skills: ['CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'July 2022',
    link: '/vanilla_js/health_care_webpage/health_webpage.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/vanilla_js/health_care_webpage'
  }
]

export const VanillaJSProjects = () => {
  return (
    <>
      <div className="flex flex-col text-[#371064] items-center mt-16 pt-8 pb-10 mx-8 rounded-2xl">
        <div className="font-bold lg:text-3xl md:text-2xl text-xl">
          VANILLA JS PROJECTS
        </div>

        {projects.map((project, i) => {
          return <ProjectDetails key={i} details={project} />
        })}
      </div>
    </>
  )
}
