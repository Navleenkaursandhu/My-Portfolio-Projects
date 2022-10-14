import { Input } from './input'

export const id = 'react-hangmangame'
export const title = 'GUESS THE WORD GAME'
export const description = <div>
  This is a classic word game where the goal is to simply find the hidden word.
  You will be presented with a number of blank spaces representing the missing letters you need to find.
  Use the keyboard to guess a letter (Hint: I recommend starting with vowels).
  If your chosen letter exists in the hidden word, then all the blanks where that letter appears will be revealed.
  After you&apos;ve revealed several letters, you may be able to guess what the answer is and fill in the remaining letters.
  Be warned, every time you guess a wrong letter you loose one out of 16 lifelines. If you&apos;re a fan of word puzzles,
  make sure you check this out.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'August 2022 - September 2022'
export const link = './HangmanGame'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/reactProject_Hangman'

export const Main = () => {
  return (
    <div className='font-applyPatrick'>
      <Input />
    </div>
  )
}
