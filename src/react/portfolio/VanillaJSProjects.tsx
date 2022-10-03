import { ProjectDetails } from './ProjectDetails'
const projects = [
  {
    title: 'CALENDER',
    description: 'Calender',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/Calender/calender.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/Calender'
  },
  {
    title: 'ANALOG CLOCK',
    description: 'Analog Clock',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/analogClock/clock.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/analogClock'
  },
  {
    title: 'LCD CLOCK',
    description: 'LCD Clock',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/LCDClock/clock.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/LCDClock'
  },
  {
    title: 'TIP CALCULATOR',
    description: 'Tip Calculator',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/tip_calculator/code.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/tip_calculator'
  },
  {
    title: 'TODO LIST',
    description: 'TODO List',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/TODOList/list.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/TODOList'
  },
  {
    title: 'BANK ACCOUNT',
    description: 'Bank Account',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/bank_account/bank.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/bank_account'
  },
  {
    title: 'FIGHTING GAME',
    description: 'Fighting Game',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/fighting_game/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/fighting_game'
  },
  {
    title: 'CARD MATCH GAME',
    description: 'Card Match Game',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/CardMatch/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/CardMatch'
  },
  {
    title: 'HANGMAN GAME',
    description: 'Hangman Game',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/HangmanGame/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/HangmanGame'
  },
  {
    title: 'SIMON SAYS GAME',
    description: 'Simon Says Game',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/SimonSays/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/SimonSays'
  },
  {
    title: 'TIC TAC TOE GAME',
    description: 'Tic Tac Toe Game',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/tic_tac_toe/game.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/tic_tac_toe'
  },

  {
    title: 'ROCK PAPER SCISSORS GAME',
    description: 'Rock Paper Scissors Game',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/rock_paper_scissors/rps.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/rock_paper_scissors'
  },
  {
    title: 'HEALTH CARE WEBPAGE',
    description: 'Health Care Webpage',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/health_care_webpage/health_webpage.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/health_care_webpage'
  },
  {
    title: 'LOGIN WEB PAGE',
    description: 'Login Webpage',
    skills: ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML'],
    date: 'Sept 24 - Sept 27, 2022',
    link: '/src/vanilla_js/login_webpage/Login.html',
    githubLink: 'https://github.com/Navleenkaursandhu/notebook/tree/main/projects/login_webpage'
  }
]

export const VanillaJSProjects = () => {
  return (
    <>
      <div className="flex flex-col text-[#371064] items-center mt-16 pt-8 pb-10 mx-8 rounded-2xl">
        <div className="font-bold text-3xl">
          VANILLA JAVASCRIPT PROJECTS
        </div>

        {projects.map((project, i) => {
          return <ProjectDetails key={i} details={project} />
        })}
      </div>
    </>
  )
}
