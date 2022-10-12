import { Input } from './input'
import './style.css'

export const id = 'react-lcdclock'
export const title = 'LCD CLOCK'
export const description = <div>
  Are you searching for an ideal Live Digital clock, perfect for remote working or learning while in front
  of your computer or laptop? A novel way to know and get the time is by using this 24 hour digital
  desktop clock that displays current time in hours, minutes and seconds on full screen with high resolution.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'August 2022 - September 2022'
export const link = './LCDClock'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject_LCDClock'

export const Main = () => {
  return (
    <div className='lcd'>
      <Input />
    </div>
  )
}
