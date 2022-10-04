import { Input } from './input'

export const title = 'TIC TAC TOE GAME'
export const description = 'Tic Tac Toe Game Application'
export const skills = ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML']
export const date = 'August 2022'
export const link = './TicTacToe'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject%20_TicTacToe'

export const Main = () => {
  return (
    <div className='tic-tac-toe'>
      <Input />
    </div>)
}
