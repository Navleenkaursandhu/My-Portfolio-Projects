import './style.css'
import { Input } from './input'
import { parseISO } from 'date-fns'

export const id = 'react-analogclock'
export const title = 'ANALOG SVG CLOCK'
export const description = <div>
  Time is crucial but sometimes we forget to track the time, that is what this SVG based analog clock application offers its users.
  This traditional Analog clock App comes in handy when you want to know the accurate date and time. So, make time management a
  breeze with our functional analog clock app.
</div>
export const skills = ['ReactJS', 'Vite', 'CSS', 'SVG', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-08')
export const link = './AnalogSVGClock'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/reactProject_AnalogSVGClock'

export const Main = () => {
  return (
    <div className='analog-clock'>
      <Input />
    </div>
  )
}
