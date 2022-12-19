import { parseISO } from 'date-fns'
import { Header } from './Header'

export const title = 'TIMESHEET'
export const description = <div>
  Track and record your daily work activities with just a few clicks using this simple App. Simply sign in and out to log the tasks you complete,
  breaks you take, and any notes you want to add. The app stores your data locally and securely, so you can access it anytime
  you use the same computer. To respect your <span className='bg-cyan-100 px-2'>privacy</span>, no user data is sent or stored on external servers
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'Local Storage API', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-09')
export const link = './Timesheet'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/react_project_Timesheet'

export const Main = () => {
  return (
    <div className='h-screen'>
      <Header />
    </div>
  )
}
