import './style.css'
import { Input } from './input'

export const id = 'react-analogclock'
export const title = 'ANALOG SVG CLOCK'
export const description = <div>
  Time is crucial but sometimes we forget to track the time, That is what this SVG based analog clock application offers its users.
  This Analog clock App comes in handy when you want to know the accurate date and time just in case you forgot.
  So now you won&apos;t be late and you&apos;ll make sure to use your time wisely.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'CSS', 'HTML', 'SVG', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'August 2022 - September 2022'
export const link = './AnalogSVGClock'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/reactProject_AnalogSVGClock'

export const Main = () => {
  return (
    <div className='analog-clock'>
      <Input />
    </div>
  )
}
