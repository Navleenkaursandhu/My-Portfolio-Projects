import { Input } from './input'

export const title = 'ROCK PAPER SCISSORS GAME'
export const description = <div>
  A classic game App - Rock, Paper, Scissors! Choose one of the three choices - and see if you can beat the computer.
  The game is easy and the fun continues in this online version of the absolute classic game. The App has a simple
  interface where each symbol is superior to another. As per rules rock beats scissors, scissors beat paper by cutting
  it, and paper beats rock by covering it. By simple guess work, you can try beating the opponent. There are 5 rounds in
  total and the one with highest score at the end, wins the game.
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
