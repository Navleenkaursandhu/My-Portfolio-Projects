import { parseISO } from 'date-fns'
import { Input } from './input'
import './style.css'

export const id = 'react-tipcalculator'
export const title = 'TIP CALCULATOR'
export const description = <div>
  Are you tired of awkward bill-splitting situations when dining out with friends?
  Our free tip calculator can help! Simply enter the total bill amount, desired tip
  percentage, and number of people splitting the bill to quickly and accurately calculate
  each person&apos;s share. This user-friendly app is perfect for quick calculations on the go.
</div>
export const skills = ['ReactJS', 'Vite', 'CSS', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-08')
export const link = './TipCalculator'
export const githubLink = 'https://github.com/brar-navleen/My-Portfolio-Projects/tree/main/src/react/reactProject_TipCalculator'

export const Main = () => {
  return (
    <div className='tip-calculator'>
      <Input />
    </div>
  )
}
