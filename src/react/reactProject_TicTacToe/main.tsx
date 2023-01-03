import { parseISO } from 'date-fns'
import { Input } from './input'

export const id = 'react-tictactoegame'
export const title = 'TIC TAC TOE GAME'
export const description = <div>
  Put away your pen and paper - now you can play Tic Tac Toe on your computer using this App. This game is played on a 3x3 grid.
  Each player&apos;s goal is to make 3 in a row. You are X, your friend is O. You and your friend will take turns placing
  your mark, X or O, on an available square in the grid. Think on your feet but also be careful, as the first player to make
  3 of their own mark in a row vertically, horizontally, or diagonally wins the game! If all 9 squares are filled and neither
  player has 3 in a row, the game is considered a tie.
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-08')
export const link = './TicTacToe'
export const githubLink = 'https://github.com/brar-navleen/My-Portfolio-Projects/tree/main/src/react/reactProject_TicTacToe'

export const Main = () => {
  return (
    <div>
      <Input />
    </div>)
}
