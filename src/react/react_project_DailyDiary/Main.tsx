import { CoverPage } from './CoverPage'

export const title = 'Daily Diary'
export const description = 'Daily Diary Application'
export const skills = ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML']
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
