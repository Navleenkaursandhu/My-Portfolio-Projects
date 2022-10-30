import { Header } from './Header'

export const title = 'TIMESHEET'
export const description = <div>
  Record your day to day working hours with a simple push of a button. By signing in and out you can easily record the tasks you worked on,
  breaks and notes by clicking on the &quot;Add task&quot; button. The app stores the data locally and securely therefore, previously
  entered user information can be retrieved any time the user visits the web page using the same computer. No user data is sent or stored on
  an external server to respect the <span className='bg-cyan-100 px-2'>privacy</span> of the end users.
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'Local Storage API', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = 'September 2022'
export const link = './Timesheet'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/react_project_Timesheet'

export const Main = () => {
  return (
    <div className='h-screen'>
      <Header />
    </div>
  )
}
