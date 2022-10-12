import { CoverPage } from './CoverPage'

export const title = 'Daily Diary'
export const description = <div>
  Whether you are looking for a tool to record your daily activities, jotting down notes, recording daily musings,
  setting up time schedule, keeping track of appointments, important deadlines or events and much more,
  this daily diary has you covered. Each day has a lot of writing space that you need with well organised pages.
  Designed to focus on <span className='bg-cyan-100 px-2'>privacy</span>, your information is secured locally via <span className='bg-indigo-100 px-2'>Local Storage</span>and can be retrieved everytime you visit the App.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'CSS', 'Local Storage API', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'September 2022'
export const link = './DailyDiary'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/react_project_DailyDiary'

export const Main = () => {
  return (
    <div className="flex justify-center items-center m-[33px] p-[10px] font-applyOregano">
      <CoverPage />
    </div>
  )
}
