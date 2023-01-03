import { parseISO } from 'date-fns'
import { Input } from './input'
import './style.css'

export const id = 'react-lcdclock'
export const title = 'LCD CLOCK'
export const description = <div>
  <p>In need of a reliable and visually appealing digital clock for your remote work or online learning? This 24-hour digital desktop clock
    offers a unique and convenient way to stay on top of the time while using your computer or laptop.</p>
  <p className='mt-2'>This clock displays the current time in hours, minutes, and seconds on a full-screen display with high resolution, ensuring easy visibility
    and accuracy. Whether you&apos;re working remotely or participating in an online class, this digital clock is the perfect solution for keeping
    track of time.</p>
</div>
export const skills = ['ReactJS', 'Vite', 'CSS', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-08')
export const link = './LCDClock'
export const githubLink = 'https://github.com/brar-navleen/My-Portfolio-Projects/tree/main/src/react/reactProject_LCDClock'

export const Main = () => {
  return (
    <div className='lcd'>
      <Input />
    </div>
  )
}
