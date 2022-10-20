import { Input } from './input'
import './style.css'

export const id = 'react-tipcalculator'
export const title = 'TIP CALCULATOR'
export const description = <div>
  Have you ever been in a situation where you went outside for dinner with your friends and just as you are about to leave you have to figure out how to split the bill. But, everybody is in hurry and no one cares enough to do simple
  maths for splitting bill. Don&apos;t worry, you&apos;ll no longer be in this awkward situation any more, as this free tip Calculator is
  perfect for calculating accurate amounts while dining out and great for quick calculations while in a hurry. The App is simple, user-friendly and
  allows the user to quickly enter the total bill value in dollars, tip percentage, and the number of people to split the bill with.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
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
