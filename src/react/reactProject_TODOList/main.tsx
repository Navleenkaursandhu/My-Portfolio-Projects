import { Input } from './input'

export const id = 'react-todolist'
export const title = 'TODO LIST'
export const description = <div>
  Do you want to organize and prioritize your tasks? Here is a smart task list for everyday use.
  This is a simple and convenient to use App that allows the user to add their important daily tasks in an organized manner. You can easily delete
  a task in the list once you are done with it. With this App whether you are at home, at work
  or anywhere in between - you will be able to stay focused on the things most important to you!
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = 'August 2022'
export const link = './reactProject_TODOList'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/reactProject_TODOList'

export const Main = () => {
  return (
      <div className='lg:px-20 md:px-20 px-8 h-screen font-applyLibre'>
        <Input />
      </div>
  )
}
