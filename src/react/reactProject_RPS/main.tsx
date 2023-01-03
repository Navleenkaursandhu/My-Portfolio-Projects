import { parseISO } from 'date-fns'
import { Input } from './input'

export const id = 'vanillajs-rpsgame'
export const title = 'ROCK PAPER SCISSORS GAME'
export const description = <div>
  Here&apos;s a classic game App - Rock, Paper, Scissors! Choose one of the three choices - and see if you can beat the computer.
  The App has a simple interface where each symbol is superior to another. As per the rules, rock beats scissors by smashing it,
  scissors beat paper by cutting it, and paper beats rock by wrapping it up. You will need luck on your side if you wish to beat
  your opponent. There are 5 rounds in total and the one with highest score at the end, wins the game. Have fun!
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-08')
export const link = './RockPaperScissors'
export const githubLink = 'https://github.com/brar-navleen/My-Portfolio-Projects/tree/main/src/react/reactProject_RPS'

export const Main = () => {
  return (
    <div className='font-applyConcert'>
      <Input />
    </div>
  )
}
