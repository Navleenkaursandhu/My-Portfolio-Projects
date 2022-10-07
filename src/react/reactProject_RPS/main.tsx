import { Input } from './input'

export const title = 'ROCK PAPER SCISSORS GAME'
export const description = <div>
  A classic game - Rock, Paper, Scissors! Choose one of the three choices - and see if you can beat the computer
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'August 2022'
export const link = './RockPaperScissors'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject_RPS'

export const Main = () => {
  return (
    <div className='font-applyArchitect'>
      <Input />
    </div>
  )
}
