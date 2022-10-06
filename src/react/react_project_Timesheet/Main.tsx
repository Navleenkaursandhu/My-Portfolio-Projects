import { Header } from './Header'
import background from './assets/image.png'

export const title = 'TIMESHEET'
export const description = 'Timesheet Application'
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
