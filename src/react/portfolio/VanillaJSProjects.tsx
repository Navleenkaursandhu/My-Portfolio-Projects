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
      Most importantly, no paper is discarded in this process and you no longer require to turn or toss pages to set correct
      date on calender. The App does it for you!
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/src/vanilla_js/Calender/calender.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/Calender'
  },
  {
    id: 'vanillajs-analogclock',
    title: 'ANALOG SVG CLOCK',
    description: <div>
      The App is designed using above tools and technologies, click &quot;View&quot; button for App and to view code
      click on &quot;Github&quot; button below. Similar UI has been constructed for Analog SVG clock using React
      under React Projects section above, for project description please click <a className='text-blue-600 underline underline-offset-2' href={`#${reactAnalogClockID}`}>here.</a>
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'SVG', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/src/vanilla_js/analogClock/clock.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/analogClock'
  },
  {
    id: 'vanillajs-lcdclock',
    title: 'LCD CLOCK',
    description: <div>
      View the code and LCD Clock App designed using Vanilla JS, HTML and CSS by clicking the buttons below.
      The description of this project can be seen <a className='text-blue-600 underline underline-offset-2' href={`#${reactLCDClockID}`}>here.</a>
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/src/vanilla_js/LCDClock/clock.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/LCDClock'
  },
  {
    id: 'vanillajs-todolist',
    title: 'TODO LIST',
    description: <div>
      A simple TODO List App implemented using above mentioned tools. For react implementation please visit react projects section.
      Please click <a className='text-blue-600 underline underline-offset-2' href={`#${reactTODOListID}`}>here</a> for description.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/src/vanilla_js/TODOList/list.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/TODOList'
  },
  {
    id: 'vanillajs-cardmatchgame',
    title: 'CARD MATCH GAME',
    description: <div>
      Level up your concentration with this online memory card game App. Start the game by flipping a card.
      Then try to find another card that has the same number and color as the first. The cards with same number
      and color make a pair (such as 2 of hearts and 2 of diamonds will make a pair). If you can&apos;t find a pair, the flipped
      cards will be flipped back with the face down. Try to remember these images as it becomes easier to find pairs
      the longer you play. When you find a pair the cards will face up from the board and when you find all the pairs,
      you have completed the game. This game is a great exercise to train your memory in a playful way and most
      of you, will love playing this card matching game.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/src/vanilla_js/CardMatch/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/CardMatch'
  },
  {
    id: 'vanillajs-hangmangame',
    title: 'GUESS THE WORD',
    description: <div>
      In this section the game is designed using vanillaJS for logic, HTML for
      structuring and CSS for UI styling. The description and react version of this
      project can be viewed <a className='text-blue-600 underline underline-offset-2' href={`#${reactHangmanGameID}`}>here</a> under
      React Projects section.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/src/vanilla_js/HangmanGame/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/HangmanGame'
  },
  {
    id: 'vanillajs-simonsaysgame',
    title: 'SIMON SAYS GAME',
    description: <div>
      To play this game visit the link <a className='text-blue-600 underline underline-offset-2' href={`#${reactSimonSaysGameID}`}>here</a> to
      and get the detailed information about what application does and how it works. This App is based on above technologies and you can also
      view the react code and App under react projects segment.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/src/vanilla_js/SimonSays/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/SimonSays'
  },
  {
    id: 'vanillajs-tictactoegame',
    title: 'TIC TAC TOE GAME',
    description: <div>
      For full description about how to play this game and for react version of this project,
      click <a className='text-blue-600 underline underline-offset-2' href={`#${reactTicTacToeGameID}`}>here</a>. For
      JS App and Code click the buttons below.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'August 2022',
    link: '/src/vanilla_js/tic_tac_toe/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/tic_tac_toe'
  },
  {
    id: 'vanillajs-fightinggame',
    title: 'STREET FIGHTING GAME',
    description: <div>
      Want to play something exciting? Try this 1-on-1 fighting game with your friend on your computer using your keyboard.
      Please note that in order to play this game you need to press your keyboard alphabets to take actions during fight. The rules
      are pretty simple. The game has 3 rounds in total. To start the game Player A takes the first round followed by player B and so forth. It will be the player&apos;s choice whether
      he/she wants to hit the opponent or take a lifeline during his/her round (remember there is no point of taking
      a lifeline in your first round as it&apos;s already 100%). On hit, opponents health will reduce by a random number (the damage will be reflected by red bar)
      and on selecting lifeline the current player&apos;s health increases by random number (health is reflected by green bar). After
      3rd round the player with good health wins the battle.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'July 2022 - August 2022',
    link: '/src/vanilla_js/fighting_game/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/fighting_game'
  },
  {
    id: 'vanillajs-rpsgame',
    title: 'ROCK PAPER SCISSORS GAME',
    description: <div>
      The game is implemented using vanillaJS, HTML and CSS. Click on &quot;view&quot; button below to start playing and for instructions and rules you can
      visit <a className='text-blue-600 underline underline-offset-2' href={`#${reactRPSGameID}`}>here</a>. For react App and code for this game,
      visit react projects segment above on this page.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'July 2022',
    link: '/src/vanilla_js/rock_paper_scissors/rps.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/rock_paper_scissors'
  },
  {
    id: 'vanillajs-tipcalculator',
    title: 'TIP CALCULATOR',
    description: <div>
      Get the full description of this project <a className='text-blue-600 underline underline-offset-2' href={`#${reactTipCalculatorID}`}>here</a>. The JS code
      and app can be visited using buttons below and you will be able to locate react code and app under react projects section above.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'July 2022',
    link: '/src/vanilla_js/tip_calculator/code.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/tip_calculator'
  },
  {
    id: 'vanillajs-bankaccount',
    title: 'BANK ACCOUNT',
    description: <div>
      Take a glimpse of simple bank account App, where the user can add the amount to be deposited and
      on single click, the deposited amount gets reflected in the customers account balance.
      The App offers user to withdraw a ceratin amount less than or equal to user&apos;s account balance.
      In case user tries to withdraw unrealistic amount, the app displays a message stating user that
      you can not withdraw the amount.
    </div>,
    skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'July 2022',
    link: '/src/vanilla_js/bank_account/bank.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/bank_account'
  },
  {
    id: 'vanillajs-loginwebpage',
    title: 'LOGIN WEB PAGE',
    description: <div>
      This project is a simple demonstration of a static login page comprising of input fields,
      interactable buttons and a link. By the end of this project I was pretty
      confident with HTML and CSS concepts.
    </div>,
    skills: ['CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'July 2022',
    link: '/src/vanilla_js/login_webpage/Login.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/login_webpage'
  },
  {
    id: 'vanillajs-healthcarewebpage',
    title: 'HEALTH CARE WEBPAGE',
    description: <div>
      Had a fun experience building this static health care web App. This App was my first ever code.
      Working on this project not only boosted my confidence to code but also served as a stepping stone towards
      achieving my goal to become a web developer.
    </div>,
    skills: ['CSS', 'HTML', 'Git', 'Github', 'VS Code'],
    date: 'July 2022',
    link: '/src/vanilla_js/health_care_webpage/health_webpage.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/health_care_webpage'
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
