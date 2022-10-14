import { Input } from './input'

export const id = 'vanillajs-rpsgame'
export const title = 'ROCK PAPER SCISSORS GAME'
export const description = <div>
  Here&apos;s a classic game App - Rock, Paper, Scissors! Choose one of the three choices - and see if you can beat the computer.
  The game is easy and the fun continues in this online version of the absolute classic game. The App has a simple
  interface where each symbol is superior to another. As per the rules, rock beats scissors by smashing it, scissors beat paper by cutting
  it, and paper beats rock by wrapping it up. You will need luck on your side if you wish to beat your opponent. There are 5 rounds in
  total and the one with highest score at the end, wins the game.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'August 2022'
export const link = './RockPaperScissors'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/reactProject_RPS'

export const Main = () => {
  return (
    <div className='font-applyArchitect'>
      <Input />
    </div>
  )
}
