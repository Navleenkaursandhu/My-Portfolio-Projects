import { Input } from './input'
import './style.css'

export const id = 'react-tipcalculator'
export const title = 'TIP CALCULATOR'
export const description = <div>
  Have you ever been in a situation where you went outside for dinner with friends and now everybody is in hurry and no one cares enough to do simple
  math when it comes to splitting bill. Don&apos;t worry, you&apos;ll no longer be in this awkward situation anymore, as this free tip Calculator is
  perfect for calculating accurate amount while dining out and great for quick calculations while in a hurry. The App is simple, user-friendly and
  features fast total bill entry in dollars, tip percentage, split number for the shared bill and displays the total amount per person.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'August 2022 - September 2022'
export const link = './TipCalculator'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/reactProject_TipCalculator'

export const Main = () => {
  return (
    <div className='tip-calculator'>
      <Input />
    </div>
  )
}
