import { Input } from './input'

export const title = 'TODO LIST'
export const description = 'A dynamic TODO list to help the user keep track of their daily tasks'
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'August 2022'
export const link = './reactProject_TODOList'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject_TODOList'

export const Main = () => {
  return (
    <div className='flex justify-center'>
      <div className='my-[50px] flex-col w-[50%] h-100vh font-applyLibre'>
        <Input />
      </div>
    </div>
  )
}
