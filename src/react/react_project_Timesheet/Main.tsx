import { Header } from './Header'
import background from './assets/image.png'

export const title = 'TIMESHEET'
export const description = 'Record your day to day working hours with a simple push of a button. By signing in and out you can easily add tasks,' + ' ' +
  'breaks and notes by clicking add task button. The App enables the user to retrieve all the tasks added on daily basis via local storage'
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
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
