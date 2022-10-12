import { Input } from './input'

export const id = 'vanillajs-tictactoegame'
export const title = 'TIC TAC TOE GAME'
export const description = <div>
  Put away your pencil and paper - now you can play Tic Tac Toe on your computer using this App. This game is played on a 3x3 grid.
  Each player&apos;s goal is to make 3 in a row. You are X, your friend is O. You and your friend will take turns placing
  your Mark, X or O, on an open square in the grid. Think on your feet but also be careful, as the first player to make
  3 of their own mark in a row vertically, horizontally, or diagonally wins the game! If all 9 squares are filled and neither
  player has 3 in a row, the game is considered a Tie.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'August 2022'
export const link = './TicTacToe'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject%20_TicTacToe'

export const Main = () => {
  return (
    <div>
      <Input />
    </div>)
}
