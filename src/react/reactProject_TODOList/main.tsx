import { Input } from './input'

export const id = 'react-todolist'
export const title = 'TODO LIST'
export const description = <div>
  Do you want to organize and prioritize your tasks? -Here&apos;s a smart task list for everyday use.
  This is simple and convinient to use App that allows the user to add their important daily tasks in an organized manner. Once you feel like you
  no longer want the task in the list it can be easily deleted. With this App whether you are at home, at work
  and in your free time - you will be able to focus on really important things!
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'August 2022'
export const link = './reactProject_TODOList'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/reactProject_TODOList'

export const Main = () => {
  return (
    <div className='flex justify-center'>
      <div className='my-[50px] flex-col w-[50%] h-100vh font-applyLibre'>
        <Input />
      </div>
    </div>
  )
}
