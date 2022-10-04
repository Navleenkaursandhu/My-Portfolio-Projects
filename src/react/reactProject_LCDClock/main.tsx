import { Input } from './input'
import './style.css'

export const title = 'LCD CLOCK'
export const description = 'LCD Clock Application'
export const skills = ['React', 'JavaScript', 'CSS', 'Tailwind', 'HTML']
export const date = 'August 2022 - September 2022'
export const link = './LCDClock'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject_LCDClock'

export const Main = () => {
  return (
    <div className='lcd'>
    <Input/>
    </div>
  )
}
