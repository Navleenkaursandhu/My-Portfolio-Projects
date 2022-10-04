import { Input } from './input'

export const title = 'SIMON SAYS GAME'
export const description = 'Simon Says Application'
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'ESLint', 'Git', 'Github', 'Visual Studio Code']
export const date = 'August 2022'
export const link = './SimonSaysGame'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject_SimonSays'

export const Main = () => {
  return (
    <div className='font-applyBubblegum'>
      <Input />
    </div>
  )
}
