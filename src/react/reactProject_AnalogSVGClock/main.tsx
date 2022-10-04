import './style.css'
import { Input } from './input'

export const title = 'ANALOG SVG CLOCK'
export const description = 'Analog Clock Application'
export const skills = ['React', 'Vite', 'JavaScript', 'CSS', 'HTML', 'SVG', 'ESLint', 'Git', 'Github', 'Visual Studio Code']
export const date = 'August 2022 - September 2022'
export const link = './AnalogSVGClock'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject_AnalogSVGClock'

export const Main = () => {
  return (
    <div className='analog-clock'>
    <Input/>
    </div>
  )
}
