import { parseISO } from 'date-fns'
import { Input } from './input'

export const id = 'react-hangmangame'
export const title = 'GUESS THE WORD GAME'
export const description = <div>
  <p>Welcome to classic word puzzle game! The objective is simple: uncover the hidden word.
    You will be presented with a series of blank spaces representing the missing letters that you need to guess.
    Utilizing the keyboard, you can make a guess by selecting a single letter. As a helpful tip, we recommend
    starting with vowels as they are more likely to appear in words.</p>
  <p className='my-2'>If the letter you have chosen exists in the hidden word, all of the blank spaces where that letter appears will
    be revealed. As you reveal more letters, you may be able to deduce the hidden word and fill in the remaining spaces.
    However, be cautious as every incorrect guess will cost you one of your 16 lifelines.</p>
  <p>If you&apos;re a fan of word games, make sure to give this one a try!</p>
  <p className='bg-yellow-100 italic p-4 flex align-center gap-2 mt-4 mb-4 rounded-md'>
    <span className="material-symbols-rounded">
      warning
    </span>
    Please note that in order to play this game you need to press your keyboard alphabet keys to guess the hidden word.
  </p>
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-08')
export const link = './HangmanGame'
export const githubLink = 'https://github.com/brar-navleen/My-Portfolio-Projects/tree/main/src/react/reactProject_Hangman'

export const Main = () => {
  return (
    <div className='font-applyDosis'>
      <Input />
    </div>
  )
}
