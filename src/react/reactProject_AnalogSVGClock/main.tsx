import './style.css'
import { Input } from './input'

export const title = 'ANALOG CLOCK'
export const description = 'Analog Clock Application'
export const skills = ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML']
export const date = 'Sept 24 - Sept 27, 2022'
export const link = './AnalogSVGClock'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject_AnalogSVGClock'

export const Main = () => {
  return (
    <div className='analog-clock'>
    <Input/>
    </div>
  )
}
