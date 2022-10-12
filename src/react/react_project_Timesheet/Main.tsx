import { Header } from './Header'
import background from './assets/image.png'

export const title = 'TIMESHEET'
export const description = <div>
  Record your day to day working hours with a simple push of a button. By signing in and out you can easily add tasks,
  breaks and notes by clicking add task button. The platform uses <span className='bg-indigo-100 px-2'>Local Storage</span> where the data is stored locally and securely therefore, previously
  entered user information can be retrieved everytime the user visits the web page. Also due to Local Storage the user data does not get sent to any server thus,
  offering <span className='bg-cyan-100 px-2'>privacy</span> to the end users.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'Local Storage API', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'September 2022'
export const link = './Timesheet'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/react_project_Timesheet'

export const Main = () => {
  return (
    <div className="h-[724px] bg-no-repeat bg-left-bottom font-applyDosis bg-[length:250px_600px]" style={{ backgroundImage: `url(${background})` }}>
      <Header />
    </div>
  )
}
